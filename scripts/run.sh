rm -rf /frontend-build/*
cp -r /frontend/build/* /frontend-build

python manage.py migrate
python manage.py collectstatic --noinput
python manage.py runserver 0:8000