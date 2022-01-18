import javafx.application.Application;
import javafx.application.Platform;
import javafx.beans.value.ChangeListener;
import javafx.beans.value.ObservableValue;
import javafx.event.ActionEvent;
import javafx.event.Event;
import javafx.fxml.FXML;
import javafx.fxml.FXMLLoader;
import javafx.scene.Node;
import javafx.scene.Parent;
import javafx.scene.Scene;
import javafx.scene.control.*;
import javafx.scene.input.ClipboardContent;
import javafx.scene.input.KeyCombination;
import javafx.scene.layout.BorderPane;
import javafx.scene.layout.HBox;
import javafx.scene.layout.StackPane;
import javafx.scene.layout.VBox;
import javafx.scene.paint.Color;
import javafx.stage.*;

import javax.swing.*;
import javax.swing.text.html.Option;
import java.io.*;
import java.util.Objects;
import java.util.Optional;

public class Notepad extends Application implements Runnable {
	@FXML MenuBar menuBar;
	@FXML TextArea textArea;
	@FXML CheckMenuItem checkMenuItem;
	String currentFilePath;
	boolean autoSave;
	boolean hasChanges;
	boolean clipboardIsFromCut = false;
	ClipboardContent clipboardContent;
	public static void main(String[] args) {
		launch(args);
	}
	@Override
	public void start(Stage primaryStage) throws IOException {
//		// Create custom toolbar
//		ToolBar toolBar = new ToolBar();
//		Button button = new Button("X");
//		HBox hBox = new HBox(button);
//		toolBar.getItems().add(hBox);
//		// toolbar items
//		// toolbar listeners
//		// menubar
//		// help menu -> about
//		// edit menu -> cut / copy / paste / delete / select all
//		// file menu -> new / open / save / save as / auto save / exit
//		// read from file
//		// write to file
//		// confirm menu
//		// menu items listeners
//		// textarea
//		// textarea listeners
//		TextArea textArea = new TextArea();
//		// Create Menu Bar
//		MenuBar menuBar = new MenuBar();
//		// Create Menus
//		Menu fileMenu = new Menu("File");
//		Menu editMenu = new Menu("Edit");
//		Menu helpMenu = new Menu("Help");
//		// Create Menu Items
//		// Create file menu items
//		MenuItem newMenuItem = new MenuItem("New");
//		MenuItem openMenuItem = new MenuItem("Open...");
//		MenuItem saveMenuItem = new MenuItem("Save");
//		MenuItem saveAsMenuItem = new MenuItem("Save As...");
//		MenuItem autoSaveMenuItem = new CheckMenuItem("Auto Save");
//		MenuItem exitMenuItem = new MenuItem("Exit");
//		// Create edit menu items
//		MenuItem undoMenuItem = new MenuItem("Undo");
//		MenuItem redoMenuItem = new MenuItem("Redo");
//		MenuItem cutMenuItem = new MenuItem("Cut");
//		MenuItem copyMenuItem = new MenuItem("Copy");
//		MenuItem pasteMenuItem = new MenuItem("Paste");
//		MenuItem deleteMenuItem = new MenuItem("Delete");
//		MenuItem selectAllMenuItem = new MenuItem("Select All");
//		// Create help menu items
//		MenuItem aboutMenuItem = new MenuItem("About");
//		// Add menu items key combinations
//		// file menu items
//		newMenuItem.setAccelerator(KeyCombination.keyCombination("Ctrl+n"));
//		openMenuItem.setAccelerator(KeyCombination.keyCombination("Ctrl+o"));
//		saveMenuItem.setAccelerator(KeyCombination.keyCombination("Ctrl+s"));
//		saveAsMenuItem.setAccelerator(KeyCombination.keyCombination("Ctrl+Shift+s"));
//		exitMenuItem.setAccelerator(KeyCombination.keyCombination("Alt+F4"));
//		// edit menu items
//		undoMenuItem.setAccelerator(KeyCombination.keyCombination("Ctrl+z"));
//		redoMenuItem.setAccelerator(KeyCombination.keyCombination("Ctrl+y"));
//		cutMenuItem.setAccelerator(KeyCombination.keyCombination("Ctrl+x"));
//		copyMenuItem.setAccelerator(KeyCombination.keyCombination("Ctrl+c"));
//		pasteMenuItem.setAccelerator(KeyCombination.keyCombination("Ctrl+v"));
//		deleteMenuItem.setAccelerator(KeyCombination.keyCombination("del"));
//		selectAllMenuItem.setAccelerator(KeyCombination.keyCombination("Ctrl+a"));
//		// help menu items
//		aboutMenuItem.setAccelerator(KeyCombination.keyCombination("Ctrl+h"));
//		// Add items to menus
//		// Add items to file menu
//		fileMenu.getItems().add(newMenuItem);
//		fileMenu.getItems().add(openMenuItem);
//		fileMenu.getItems().add(saveMenuItem);
//		fileMenu.getItems().add(saveAsMenuItem);
//		fileMenu.getItems().add(autoSaveMenuItem);
//		fileMenu.getItems().add(exitMenuItem);
//		// Add items to edit menu
//		editMenu.getItems().add(redoMenuItem);
//		editMenu.getItems().add(cutMenuItem);
//		editMenu.getItems().add(copyMenuItem);
//		editMenu.getItems().add(pasteMenuItem);
//		editMenu.getItems().add(deleteMenuItem);
//		editMenu.getItems().add(selectAllMenuItem);
//		// Add items to help menu
//		helpMenu.getItems().add(aboutMenuItem);
//		// Set Menus key combinations
//		fileMenu.setAccelerator(KeyCombination.keyCombination("Ctrl+f"));
//		editMenu.setAccelerator(KeyCombination.keyCombination("Ctrl+e"));
//		helpMenu.setAccelerator(KeyCombination.keyCombination("Ctrl+h"));
//		// Add menus to menu bar
//		menuBar.getMenus().add(fileMenu);
//		menuBar.getMenus().add(editMenu);
//		menuBar.getMenus().add(helpMenu);
//		// Create main root branch
////		BorderPane root = new BorderPane();
////		root.setTop(menuBar);
////		root.setCenter(textArea);
		Parent root = FXMLLoader.load(Objects.requireNonNull(getClass().getResource("layout.fxml")));
		// Create Main Scene
		Scene scene = new Scene(root, 800, 600);
		// Change background color
		scene.setFill(Color.LIGHTBLUE);
		// Set application title
		primaryStage.setTitle("Notepad +++");
		// Remove default platform toolbar
		// Add scene to primary stage
		primaryStage.setScene(scene);

		// starts auto save thread
		new Thread(this).start();
		// Start application
		primaryStage.show();
	}
	// reads file contents to text area
	private void readFileContents(FileReader fileReader) throws IOException {
		BufferedReader bufferedReader = new BufferedReader(fileReader);
		textArea.clear();
		String text;
		while((text = bufferedReader.readLine()) != null) {//copy contents to text area
			textArea.appendText(text + "\n");
		}
		bufferedReader.close();
		fileReader.close();
	}
	// opens file chooser
	// open: true -> returns an instance of an existing file
	// open: false -> returns an instance of a new file
	private File chooseFile(boolean open) {
		FileChooser fileChooser = new FileChooser();
		fileChooser.setTitle(open ? "Open Existing File": "Create New File");
		fileChooser.getExtensionFilters().addAll(
				new FileChooser.ExtensionFilter("Text Files", "*.txt"));
		Stage stage = (Stage) menuBar.getScene().getWindow();
		File selectedFile;
		if (open) {
			selectedFile = fileChooser.showOpenDialog(stage);
		} else {
			selectedFile = fileChooser.showSaveDialog(stage);
		}
		if (selectedFile != null) {
			currentFilePath = selectedFile.getAbsolutePath();
		}
		return selectedFile;
	}
	// creates a new file
	// isSave: true -> add text area contents to the newely created file
	// isSave: false -> creates a blank file
	private void writeFile(boolean isSave) {
		File selectedFile = chooseFile(false);
		if (selectedFile != null) {
			try {
				FileWriter fileWriter = new FileWriter(selectedFile, false);
				if (isSave) {
					fileWriter.write(textArea.getText());
				}
				fileWriter.close();
				if (!isSave) {
					textArea.clear();
				}
				hasChanges = false;
			} catch (IOException e) {
				e.printStackTrace();
			}
		}
	}
	// create an alert dialog to confirm discard
	private String alertUser() {
		String resultString = "discard";
		if (hasChanges) {
			Alert alert = new Alert(Alert.AlertType.CONFIRMATION);
			alert.setTitle("Alert");
			alert.setHeaderText("You have unsaved changes, are you sure you want to discard it?");
			ButtonType saveButton = new ButtonType("Save");
			ButtonType discardButton = new ButtonType("Discard");
			ButtonType cancelButton = new ButtonType("Cancel", ButtonBar.ButtonData.CANCEL_CLOSE);
			alert.getButtonTypes().setAll(saveButton, discardButton, cancelButton);
			ButtonType result = alert.showAndWait().get();
			if (result == saveButton) {
				if (currentFilePath == null) {
					writeFile(true);
				} else {
					save();
				}
			} else if (result == discardButton) {
				resultString = "discard";
			} else {
				resultString = "cancel";
			}
		}
		return resultString;
	}
	// saves the currently opened file
	// overwrites the current file with the current text in text area
	private void save() {
		try {
			FileWriter fileWriter = new FileWriter(currentFilePath, false);
			fileWriter.write(textArea.getText());
			fileWriter.close();
			hasChanges = false;
		} catch (IOException e) {
			e.printStackTrace();
		}
	}
	// edit menu handlers
	// cut handler
	@FXML
	public void cutTextHandler(ActionEvent event) {
		String string = textArea.getSelectedText();
		clipboardContent = new ClipboardContent();
		clipboardContent.putString(string);
		textArea.replaceSelection("");
		clipboardIsFromCut = true;
		event.consume();
	}
	// copy handler
	@FXML
	public void copyTextHandler(ActionEvent event) {
		String string = textArea.getSelectedText();
		clipboardContent = new ClipboardContent();
		clipboardContent.putString(string);
		clipboardIsFromCut = false;
		event.consume();
	}
	// paste handler
	@FXML
	public void pasteTextHandler(ActionEvent event) {
		if (clipboardContent != null) {
			String text = clipboardContent.getString();
			textArea.insertText(textArea.getCaretPosition(), text);
			if (clipboardIsFromCut) {
				clipboardContent = null;
				clipboardIsFromCut = false;
			}
		}
		event.consume();
	}
	// delete handler
	@FXML
	public void deleteTextHandler(ActionEvent event) {
		textArea.replaceSelection("");
		event.consume();
	}
	// select all handler
	@FXML
	public void selectAllHandler(ActionEvent event) {
		textArea.selectAll();
		event.consume();
	}
	// deselect all handler
	@FXML
	public void deselectAllHandler(ActionEvent event) {
		textArea.deselect();
		event.consume();
	}
	// help menu handlers
	// about dialog handler
	@FXML
	public void aboutHandler(ActionEvent event) {
		Alert alert = new Alert(Alert.AlertType.CONFIRMATION);
		alert.setTitle("Notepad +++");
		alert.setHeaderText("Welcome");
		alert.setContentText("Created for Java: lab # 9");
		alert.getButtonTypes().remove(1);
		alert.showAndWait();
		event.consume();
	}
	// listen to textarea changes
	// sets hasChanges = true
	// TODO::fix
	@FXML
	public void onTextAreaInput(Event event) {
		hasChanges = true;
		event.consume();
	}
	// File Menu Handlers
	// Create new file handler
	@FXML
	public void newFile(ActionEvent event) {
		String result = alertUser();
		if (result.equals("discard")) {
			writeFile(false);
		}
		event.consume();
	}
	// open an existing file handler
	@FXML
	public void openFile(ActionEvent event) {
		String result = alertUser();
		if (result.equals("discard")) {
			File selectedFile = chooseFile(true);//open file
			if (selectedFile != null) {
				try {
					FileReader fileReader = new FileReader(selectedFile);
					readFileContents(fileReader);
				} catch (IOException e) {
					e.printStackTrace();
				}
			}
		}
		event.consume();
	}
	// save file handler
	@FXML
	public void saveFile(ActionEvent event) {
		save();
		event.consume();
	}
	// save file as a new file handler
	@FXML
	public void saveFileAs(ActionEvent event) {
		writeFile(true);
		event.consume();
	}
	// changes auto save state handler
	@FXML
	public void setAutoSave(ActionEvent event) {
		autoSave = checkMenuItem.isSelected();
		event.consume();
	}
	// quit the app handler
	@FXML
	public void quitApp(ActionEvent event) {
		String result = alertUser();
		if (result.equals("discard")) {
			Platform.exit();
		}
		event.consume();
	}
	// run thread to handle auto save process
	public void run() {
		while(true) {
			if (autoSave && currentFilePath != null) {
				save();
			}
			try {
				Thread.sleep(100);
			} catch (InterruptedException e) {
				e.printStackTrace();
			}
		}
	}
}
