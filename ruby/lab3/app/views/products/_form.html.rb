<%= form_with model: product do |form| %>
    <div>
       <%= form.label :name %> <br>
       <%= form.text_field :name %> <br>
       <% @product.errors.full_messages_for(:name).each do |message| %>
        <div> <%= message %></div>
       <% end %>
    </div>
      <div>
    <%= form.label :price %><br>
    <%= form.number_field :price %><br>
     <% @product.errors.full_messages_for(:price).each do |message| %>
      <div> <%= message %></div>
     <% end %>
  </div> <br>
  <div>
  <%= form.label :description %><br>
  <%= form.text_field :description %><br>
   <% @product.errors.full_messages_for(:description).each do |message| %>
    <div> <%= message %></div>
   <% end %>
</div> 
  <%= collection_select(:product, :admin_id, Admin.all, :id, :name, prompt: true) %>
  </div>
  <div><br>
     <%= form.submit %>
  </div>
<% end %>