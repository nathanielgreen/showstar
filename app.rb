# app.rb
require "bundler/setup"
require 'sinatra'
require 'mail'

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
    email = params[:email]
    subject = params[:subject]
    body = params[:body]
    puts name
    puts email
    puts subject
    puts body
    mail = Mail.new do
      from    "#{mail}"
      to      "ngreen2303@gmail.com"
      subject 'This is a test email'
      body    'This is a test' 
    end
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

