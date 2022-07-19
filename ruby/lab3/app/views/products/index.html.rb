<%= link_to "New product", new_product_path %>

<table>
  <tr>
    <th>product_name</th>
    <th>product_price</th>
    <th>product_escription</th>
    <th>Actions</th>
  </tr>
  <% @products.each do |product| %>
    <tr>
       <td><%=product.name%></td>
       <td><%=product.price%></td>
       <td><%=product.description%></td>
       <td>
           <%= link_to "show", product %>
           <%= link_to "Edit", edit_product_path(product) %>
           <%= link_to "Delete", product_path(product), data:{
           turbo_method: :delete,
           turbo_confirm: "do you want to delete product?"
          } %>
  
       </td>
       <td>
       <%= link_to product.admin.name, product.admin %>
    
      </td>
  
    </tr>
    <% end %>
        
  </table>  