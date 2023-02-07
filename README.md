# ShareBox

A simple marketplace for small content creators and writers to sell their creations and earn from them and also provide a platform for people to find good reads and content at a reasonable price.

## Installation

1. Create a folder where you want to clone this repository.
2. Create a virtual environment and activate it.
```
pip install virtualenv

```
```
virtualenv env

```
```
env\scripts\activate
```
3. Install requirements.

```
pip install requirements.txt
```
4. To install react dependencies, change the directory to frontend and run this command
```
npm install
```
5. Make migrations in database
```
python manage.py makemigrations

python manage.py migrate
```

6. Start the server to enjoy the functionality of the software.

```
python manage.py runserver
```
```
npm start
```

For adding products you have to manually add from database for this you have to run this command

```
python manage.py createsuperuser
```

After creating super user you can go to this url to access admin portal

```
http://127.0.0.1:8000/admin
```

for testing you can search the product :- python, c++

## License

[MIT](https://choosealicense.com/licenses/mit/)
