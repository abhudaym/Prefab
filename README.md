# PrefabMart

> Built using React, Redux, NodeJS, MongoDB and Microsoft Azure <br/>
> Deployed Here: https://prefab-msft.azurewebsites.net/ <br/>
> Prototype For Azure Developer League 2021

Screenshots
![Screenshot 2021-06-25 130242](https://user-images.githubusercontent.com/52799877/123388409-64fd0600-d5b6-11eb-9f0e-e69a9ebeba07.jpg)
![image](https://user-images.githubusercontent.com/52799877/123388534-82ca6b00-d5b6-11eb-95cd-08856e51508d.png)


## Features

- Full featured shopping cart

![image](https://user-images.githubusercontent.com/52799877/123393283-8f9d8d80-d5bb-11eb-8052-39aebfd7953a.png)

- Product reviews and ratings

![image](https://user-images.githubusercontent.com/52799877/123393497-c8d5fd80-d5bb-11eb-952e-9991981b376f.png)

- Top products carousel

![image](https://user-images.githubusercontent.com/52799877/123393569-d5f2ec80-d5bb-11eb-97e1-e607ad884c07.png)

- Product pagination

![image](https://user-images.githubusercontent.com/52799877/123403342-4ef74180-d5c6-11eb-9409-b9f4ca124113.png)

- Product search feature

![image](https://user-images.githubusercontent.com/52799877/123393893-2ec28500-d5bc-11eb-9c31-c99f1b218572.png)

- User profile with orders

![image](https://user-images.githubusercontent.com/52799877/123394254-8e209500-d5bc-11eb-82a2-e9905099e85e.png)

- Admin product management

![image](https://user-images.githubusercontent.com/52799877/123394454-c922c880-d5bc-11eb-8b96-55e9d6e91591.png)

- Admin Order details page

![image](https://user-images.githubusercontent.com/52799877/123394494-d2ac3080-d5bc-11eb-870b-6fddf84dc409.png)

- Buyer Info received

![image](https://user-images.githubusercontent.com/52799877/123915887-969f1400-d99e-11eb-8bed-499cee18cc48.png)

- Checkout process (shipping, payment method, etc)

![image](https://user-images.githubusercontent.com/52799877/123394153-73e6b700-d5bc-11eb-80b0-6760985f1018.png)

- PayPal / credit card integration

![image](https://user-images.githubusercontent.com/52799877/123394209-8103a600-d5bc-11eb-89bd-52167d2288db.png)

- Database seeder (products & users)
- FAQ Chatbot integration

![image](https://user-images.githubusercontent.com/52799877/123394733-16069f00-d5bd-11eb-9766-cf48cc907983.png)



## Usage

### Env Variables

Create a .env file in then root and add the following

```
NODE_ENV = development
PORT = 5000
MONGO_URI = your mongodb uri
JWT_SECRET = 'abc123'
PAYPAL_CLIENT_ID = your paypal client id
```

### Install Dependencies (frontend & backend)

```
npm install
cd frontend
npm install
```

### Run

```
# Run frontend (:3000) & backend (:5000)
npm run dev

# Run backend only
npm run server
```

## Build & Deploy

```
# Create frontend prod build
cd frontend
npm run build
```

### Seed Database

You can use the following commands to seed the database with some sample users and products as well as destroy all data

```
# Import data
npm run data:import

# Destroy data
npm run data:destroy
```

### Collaborators
- [Abhuday Mishra](https://www.linkedin.com/in/abhudaym/)
- [Rohit Singh](https://www.linkedin.com/in/rohit-singh-717b50118/)
- [Trisha Chander](https://www.linkedin.com/in/trisha-chander-46433019b/)
