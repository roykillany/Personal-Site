class Photo < ActiveModel::Base
	has_attached_file :image, 
		styles: { medium: "300x300>", thumb: "100x100>", tiny: "40x40" }, 
		storage: :s3, default_url: "http://www.genengnews.com/app_themes/genconnect/images/default_profile.jpg"
	validates_attachment_content_type :image, content_type: /\Aimage\/.*\z/
end