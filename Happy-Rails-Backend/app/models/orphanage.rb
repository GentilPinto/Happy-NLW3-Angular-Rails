class Orphanage < ApplicationRecord
    mount_uploaders :images, ImageUploader
end
