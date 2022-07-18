class User

  @@name = "default user"
  def initialize(name="user")
    @instance_name=name
  end

  def get_instance_name
    @instance_name
  end

  def set_instance_name(name)
    @instance_name=name
  end

  def self.set_class_name(name)
    @@name=name
  end

  def self.get_class_name
    @@name
  end

end




