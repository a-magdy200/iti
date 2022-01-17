import javafx.application.Application;
import javafx.scene.Scene;
import javafx.scene.layout.StackPane;
import javafx.scene.paint.Color;
import javafx.scene.shape.Rectangle;
import javafx.scene.text.Text;
import javafx.stage.Stage;
import javafx.stage.StageStyle;

public class HelloWorldCSS extends Application {
    public HelloWorldCSS() {
        System.out.println("Executing Constructor: " + Thread.currentThread().getName());
    }
    @Override
    public void init() {
        System.out.println("Executing Init: " + Thread.currentThread().getName());
    }
    @Override
    public void stop() {
        System.out.println("Executing Stop: " + Thread.currentThread().getName());
    }
    @Override
    public void start(Stage primaryStage) throws Exception {
        System.out.println("Executing Start: " + Thread.currentThread().getName());
        // Declare Variables
        final int sceneWidth = 400;
        final int sceneHeight = 400;
        // Create Components
        Text helloWorld = new Text("Hello World");
        Text reflectedText = new Text("Hello World");
        Rectangle rectangle = new Rectangle(0, 0, sceneWidth, sceneHeight);
        // Create Root branch
        StackPane root = new StackPane();
        // Create Scene
        Scene scene = new Scene(root, sceneWidth, sceneHeight);
        // Load css file
        scene.getStylesheets().add(getClass().getResource("myStyles.css").toString());
        // Apply styles to components
        rectangle.getStyleClass().add("background");
        helloWorld.getStyleClass().add("text");
        reflectedText.getStyleClass().add("reflectedText");
        // Add Components to root branch
        root.getChildren().add(rectangle);
        root.getChildren().add(helloWorld);
        root.getChildren().add(reflectedText);

        // Add scene to stage
        primaryStage.setScene(scene);
        // Change app layout
        primaryStage.initStyle(StageStyle.UNDECORATED);
        // Start app
        primaryStage.show();
    }
    public static void main(String args[]){
        launch(args);
    }
}