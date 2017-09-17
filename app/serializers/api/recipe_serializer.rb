class Api::RecipeSerializer < ActiveModel::Serializer
  attributes :id, :title, :details, :pdf

  def title
    object.pdf_file_name
  end
end
