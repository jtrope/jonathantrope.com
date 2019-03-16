FROM python:3.7.1

WORKDIR /usr/app

RUN apt-get update
RUN apt-get -y install curl gnupg
RUN curl -sL https://deb.nodesource.com/setup_11.x  | bash -
RUN apt-get -y install nodejs
RUN curl https://raw.githubusercontent.com/kennethreitz/pipenv/master/get-pipenv.py | python

COPY ./package.json ./
RUN npm install

COPY ./Pipfile ./
RUN pipenv install --dev

COPY ./ ./

RUN npm run build

CMD ["pipenv", "run", "python", "jtrope/manage.py", "runserver", "0.0.0.0:3030"]
