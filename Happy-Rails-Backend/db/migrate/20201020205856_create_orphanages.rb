class CreateOrphanages < ActiveRecord::Migration[6.0]
  def change
    create_table :orphanages do |t|
      t.string :name
      t.decimal :latitude
      t.decimal :longitude
      t.text :about
      t.text :instructions
      t.string :opening_hours
      t.boolean :open_on_weekends, default: false

      t.timestamps
    end
  end
end
