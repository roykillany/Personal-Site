class Recipe < ActiveRecord::Base
  has_attached_file :pdf,
    storage: :s3, bucket: ENV["S3_BUCKET"], default_url: "http://www.genengnews.com/app_themes/genconnect/images/default_profile.jpg"
  validates_attachment :pdf, content_type: { content_type: "application/pdf" }
end
