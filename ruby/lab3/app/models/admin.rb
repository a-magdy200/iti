class Admin < ApplicationRecord
    has_many:Products, dependent: :destroy

    def name_with_initial
        "Admin #{name}"
      end
end