class SubCatMen::FormalController < MenController

  def formal
    @formal_fashion_item = @items.men_categories("Formal")
    @formal_shop_look = @shop_look_images.find_category_mens("Formal").uniq!
    join_items_and_sort(@formal_fashion_item, @formal_shop_look)
    @all_featured = @items.featured_mens_categorys_four("Formal").sample(4)
    respond_to do |format|
        format.html
        format.js
    end
  end

  def jacket_coat
    @formal_fashion_item = @items.men_sub_categories("Jackets")
    @formal_shop_look = @shop_look_images.find_category_mens("Jackets").uniq!
    join_items_and_sort(@formal_fashion_item, @formal_shop_look)
    respond_to do |format|
        format.html
        format.js
    end
  end

  def accessory
    @formal_fashion_item = @items.men_sub_categories("Accessories")
    @formal_shop_look = @shop_look_images.find_category_mens("Accessories").uniq!
    join_items_and_sort(@formal_fashion_item, @formal_shop_look)
    respond_to do |format|
        format.html
        format.js
    end
  end

  def suit
    @formal_fashion_item = @items.men_sub_categories("Suits")
    @formal_shop_look = @shop_look_images.find_category_mens("Suits").uniq!
    join_items_and_sort(@formal_fashion_item, @formal_shop_look)
    respond_to do |format|
        format.html
        format.js
    end
  end
end