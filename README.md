# Burner

Burner is a SAP built with Ruby on Rails and React. To use Burner, a user must make an account. Once logged in, a user can see a collection of user-submitted candles with information on the notes, size, and price of the candles. Users can add candles to their favorites and post pubic reviews of candles for other users to see. The candle collection is searchable. Logged in users can submit new candles to the collection, and they can naviagate to their profiles that display of their reviews and favorites. 

## Installation

Clone the repository to your local environment. install Ruby package bundle and install packages from client. 

```console
$ git clone git@github.com:pjparham/candle-burner-wiki.git
```

Intall packages and create database. 

```sh
bundle install
rails db:create
npm install --prefix client
```


You can use the following commands to run the application:
- `rails s`: run the backend on [http://localhost:3000](http://localhost:3000)
- `npm start --prefix client`: run the frontend on
  [http://localhost:4000](http://localhost:4000)


## Usage

![burner login](/Github%20images/burner_login_mobile_view.png)
![burner signup](/Github%20images/burner_signup_mobile_view.png)
![burner hompage](/Github%20images/burner_homepage_mobile_view.png)
![burner reviews](/Github%20images/burner_reviews_mobile_view.png)
![burner candle form](/Github%20images/burner_candle_form_mobile_view.png)


<!-- ## Usage

```python
import foobar

# returns 'words'
foobar.pluralize('word')

# returns 'geese'
foobar.pluralize('goose')

# returns 'phenomenon'
foobar.singularize('phenomena')
``` -->

