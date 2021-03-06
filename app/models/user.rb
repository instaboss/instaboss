class User < ActiveRecord::Base
  has_many :fashion_items, dependent: :destroy
  has_many :shop_the_look_images, dependent: :destroy

  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable
end
