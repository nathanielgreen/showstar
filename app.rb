# app.rb
require 'sinatra'

#navbar
get '/' do
  erb :index
end

get '/gallery' do
  erb :gallery
end

get '/planyourparty' do
  erb :planyourparty
end

get '/music' do
  erb :music
end

get '/contact' do
  erb :contact
end


#events
get '/playhouse' do
  erb :playhouse
end

get '/xothursdays' do
  erb :xothursdays
end

get '/backwhen' do
  erb :backwhen
end

get '/mayhem' do
  erb :mayhem
end
