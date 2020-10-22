class AddImagesToOrphanages < ActiveRecord::Migration[6.0]
  def change
    add_column :orphanages, :images, :json
  end
end
