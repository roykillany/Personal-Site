# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20160410022109) do

  create_table "links", force: :cascade do |t|
    t.string   "alias"
    t.string   "url",        null: false
    t.string   "comment"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.string   "link_type"
  end

  create_table "photos", force: :cascade do |t|
    t.string   "details"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.string   "image_file_name"
    t.string   "image_content_type"
    t.integer  "image_file_size"
    t.datetime "image_updated_at"
  end

  create_table "posts", force: :cascade do |t|
    t.string   "first_name", null: false
    t.string   "last_name",  null: false
    t.string   "email",      null: false
    t.string   "comment",    null: false
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "posts", ["email"], name: "index_posts_on_email"
  add_index "posts", ["first_name", "last_name"], name: "index_posts_on_first_name_and_last_name"
  add_index "posts", ["first_name"], name: "index_posts_on_first_name"
  add_index "posts", ["last_name"], name: "index_posts_on_last_name"

  create_table "users", force: :cascade do |t|
    t.string   "username",        null: false
    t.string   "password_digest", null: false
    t.datetime "created_at"
    t.datetime "updated_at"
    t.string   "session_token"
  end

  add_index "users", ["username"], name: "index_users_on_username", unique: true

end
