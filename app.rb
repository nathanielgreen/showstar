# app.rb
require "bundler/setup"
require 'sinatra'
require 'pony'


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

  get '/news' do
    erb :news
  end

  get '/music' do
    erb :music
  end

  get '/contact' do
    erb :contact
  end

  post '/contact' do
    name = params[:name]
    mail = params[:mail]
    subject = params[:subject]
    body = params[:body]
    Pony.mail(:to => 'ngreen2303@gmail.com', :from => "#{mail}", :subject => "#{subject}", :body => "#{body}")
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

  get '/selectedsounds' do
    erb :selectedsounds
  end

