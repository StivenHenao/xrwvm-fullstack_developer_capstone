
# 🚗 Full Stack Django Cloud Dev Project

A cloud-hosted web application for managing car dealership reviews, built with Django and IBM Cloud services.

## 📚 Background

This project was developed as part of the final Capstone for the [IBM Full Stack Cloud Developer Professional Certificate](https://www.coursera.org/professional-certificates/ibm-full-stack-cloud-developer) on Coursera. The initial Django skeleton was provided, but core logic, integration with IBM Cloud Functions, Watson NLU, and data models were built and implemented as per the project requirements.

While the UI was kept simple, the primary focus was on developing a scalable backend and cloud integration to meet the criteria of a functional full stack cloud app.

## ✅ Project Overview

The application enables users to:

-   View dealership information across the US.
    
-   Read and post car reviews per dealership.
    
-   Analyze review sentiment using IBM Watson NLU.
    
-   Navigate the platform via a clean interface with static pages like About and Contact.
    

----------

## 🛠️ Technologies Used

### Backend

-   Python & Django
    
-   SQLite (local database for user and car data)
    
-   IBM Cloud Functions (serverless backend API)
    
-   IBM Cloudant (NoSQL DB for dealerships and reviews)
    
-   IBM Watson NLU (sentiment analysis for reviews)
    

### Frontend

-   HTML5 / CSS3 / Bootstrap
    
-   JavaScript (used to invoke IBM Cloud Functions)
    

### Deployment

-   IBM Cloud Foundry or Red Hat OpenShift (Kubernetes)
    

----------

## 🧩 Architecture

![img](https://i.imgur.com/OWyyXmL.png)

The system is composed of:

1.  **Django App**: Handles routing, authentication, templates, and user/car data (SQLite).
    
2.  **IBM Cloud Functions**: Exposes serverless endpoints:
    
    -   `/api/dealership`
        
    -   `/api/dealership?state=XX`
        
    -   `/api/review?dealerid=XX`
        
    -   `POST /api/review`
        
3.  **IBM Cloudant**: Stores dealership and review documents.
    
4.  **IBM Watson NLU**: Processes review text and determines sentiment.
    

> 📊 See the architecture diagram for a visual representation.

----------

## 🚀 Getting Started

### 1. Clone the repo


`git clone https://github.com/your-username/your-repo-name.git cd your-repo-name` 

### 2. Install dependencies



`python -m pip install -r requirements.txt` 

### 3. Setup Django


`python manage.py makemigrations
python manage.py migrate
python manage.py runserver` 

### 4. Create Superuser (Optional)



`python manage.py createsuperuser` 

Then log into `http://localhost:8000/admin`

----------

## ☁️ Deployment on IBM Cloud

1.  Install IBM Cloud CLI
    
2.  Add Cloud Foundry plugin
    
3.  Update `manifest.yml`
    
4.  Deploy:
    


`ibmcloud login
ibmcloud target --cf
ibmcloud cf push` 

----------

## 🙌 For Coursera Learners IBM Professional Certificate

If you're a fellow learner referencing this repository for guidance — you're welcome! Feel free to fork and use any part of the code. If it helped you, consider leaving a ⭐️ on the repo.

## 📄 License

This project is licensed under the MIT License. See the LICENSE file for details.
