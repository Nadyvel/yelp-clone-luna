# Pull miniconda from docker hub as base image
FROM continuumio/miniconda3:latest

# Copy the requirements file from local folder to image
COPY ./backend/requirements.yml /backend/requirements.yml

# create the environment inside the docker container
RUN conda env create -f /backend/requirements.yml
#RUN mkdir /scripts
#RUN mkdir /static-files
#RUN mkdir /nginx
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
# set the working directory to /app for whenever you login into your container
WORKDIR /backend

# '/backend' can be named differently. this is the main folder for your backend app