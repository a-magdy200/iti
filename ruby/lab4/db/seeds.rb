# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

user=Role.create({ name: 'User', description: 'Can read all items' })
merchant=Role.create({ name: 'Merchant', description: 'Can CRUD his items' })
admin=Role.create({ name: 'Admin', description: 'Can CRUD anything' })

User.create({ name: 'user', email: 'user@app.com', password: '123456', password_confirmation: '123456', role_id: user.id })
User.create({ name: 'merchant', email: 'merchant@app.com', password: '123456', password_confirmation: '123456', role_id: merchant.id })
User.create({ name: 'admin', email: 'admin@app.com', password: '123456', password_confirmation: '123456', role_id: admin.id })
