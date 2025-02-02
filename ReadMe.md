# OS Baby - Online Music Streaming Platform

OS Baby is an advanced online music streaming platform built using Django (Python). It allows users to browse, play, and manage their favorite songs seamlessly.

## Features
- User authentication and account management
- Music playlist creation and management
- Browse songs by categories 
- Recently played songs feature
- Favorite music collection

## Admin Credentials
- **Username:** Os-Baby
- **Password:** MUSIC

## Installation & Setup
### **1. Clone the Repository**
```sh
 git clone <repository-url>
 cd MusicPlayer-master
```

### **2. Set Up a Virtual Environment (Recommended)**
If you want a Virtual Environment or Skip it!!
```sh
python -m venv env
source env/bin/activate  # On macOS/Linux
env\Scripts\activate    # On Windows
```

### **3. Install Dependencies**
Use the following command to install all required dependencies:
```sh
pip install -r requirements.txt
```

Alternatively, you can install them manually:
```sh
python -m pip install Pillow  
pip install Django
pip install python-decouple  
pip install django-allauth  
pip install django-crispy-forms  
pip install crispy-bootstrap5  
pip install requests  
pip install jwt  
pip install JWTpy  
pip install --upgrade requests  
pip install --upgrade PyJWT  
pip install --upgrade cryptography  
pip install asgiref
pip install sqlparse
tzdata
```

### **4. Apply Migrations**
```sh
python manage.py migrate
```

### **5. Run the Development Server**
```sh
python manage.py runserver
```
The application will be available at: **http://127.0.0.1:8000/**

---

## Project Structure
```
MusicPlayer-master/
├── authentication/  
│   ├── migrations/  
│   ├── templates/authentication/  
│   │   ├── signup.html  
│   │   └── login.html  
│   ├── admin.py  
│   ├── models.py  
│   ├── views.py  
│   ├── urls.py  
│   ├── forms.py  
│   ├── tests.py  
│   └── apps.py  
│
├── manage.py  
│
├── musicplayer/  
│   ├── settings/  
│   │   ├── base.py  
│   │   ├── development.py  
│   │   └── production.py  
│   ├── settings.py  
│   ├── urls.py  
│   ├── asgi.py  
│   ├── wsgi.py  
│   └── __init__.py  
│
├── musicapp/  
│   ├── migrations/  
│   ├── templates/musicapp/  
│   │   ├── index.html  
│   │   ├── playlist.html  
│   │   ├── detail.html  
│   │   ├── recent.html  
│   │   ├── hindi_song.html  
│   │   ├── english_song.html  
│   │   ├── all_song.html  
│   │   ├── playlist_song.html  
│   │   ├── mymusic.html  
│   │   └── favourite.html  
│   ├── admin.py  
│   ├── models.py  
│   ├── views.py  
│   ├── urls.py  
│   ├── forms.py  
│   ├── tests.py  
│   └── apps.py  
│
├── static/  
│   ├── css/  
│   │   └── musicplayer.css  
│   ├── js/  
│   │   ├── amplitude.min.js  
│   │   ├── player-control.js  
│   │   └── wavesuffer.min.js  
│   ├── fonts/  
│   │   ├── proximanova-light-webfont.woff  
│   │   ├── proximanova-regular-webfont.woff  
│   │   └── proximanova-semibold-webfont.woff  
│   ├── images/  
│   │   ├── detail.png  
│   │   ├── home.png  
│   │   └── Bg.jpeg  
│
├── templates/  
│   └── base.html  
│
├── db.sqlite3  
├── .gitignore  
├── requirements.txt  
└── media/  
```

---

## Deployment
To deploy the project, you can use **Gunicorn** and **Nginx** for production:
```sh
pip install gunicorn
```
Run the server using Gunicorn:
```sh
gunicorn --bind 0.0.0.0:8000 musicplayer.wsgi:application
```
For static files, use:
```sh
python manage.py collectstatic
```

For a complete production setup, consider using **Docker** or **Heroku**.

---

## Contribution
1. Fork the repository.
2. Create a new branch (`feature-branch`).
3. Commit your changes (`git commit -m "Added new feature"`).
4. Push to the branch (`git push origin feature-branch`).
5. Open a pull request.

---

## License
This project is licensed under the **MIT License**.

---

## Sorry for the worst ui possible


