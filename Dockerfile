# Pull miniconda from docker hub as base image
FROM continuumio/miniconda3:latest

# Copy the requirements file from local folder to image
COPY ./backend/requirements.yml /backend/requirements.yml

# create the environment inside the docker container
RUN conda env create -f /backend/requirements.yml
RUN mkdir /scripts
RUN mkdir /static-files
RUN mkdir /nginx
# we set the path were all the python pacakages are
ENV PATH /opt/conda/envs/luna-environment/bin:$PATH

# activate app
RUN echo "source activate luna-environment" >~/.bashrc

# pass all the files and folders from local folder to image
COPY ./backend /backend


# pass the script (skip that step if you don't have any scripts)
#COPY ./scripts/* /scripts/
#RUN chmod +x /scripts/*


RUN echo "source activate motion-scratch" >~/.bashrc

RUN echo 'export PATH=/opt/miniconda/bin:$PATH' > /etc/profile.d/conda.sh && \
    wget --quiet https://repo.continuum.io/miniconda/Miniconda3-latest-Linux-x86_64.sh -O ~/miniconda.sh && \
    /bin/bash ~/miniconda.sh -b -p /opt/miniconda && \
    rm ~/miniconda.sh

RUN curl -sL https://deb.nodesource.com/setup_10.x | bash - && apt-get install -y nodejs && apt-get install -y npm
# set the working directory to /app for whenever you login into your container
WORKDIR /frontend
COPY ./frontend/package.json /frontend/
COPY ./frontend/package-lock.json /frontend/
RUN npm install
COPY ./frontend /frontend
RUN npm run build

WORKDIR /backend

# '/backend' can be named differently. this is the main folder for your backend app