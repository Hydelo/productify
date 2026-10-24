#### CREATING THE BACKEND NODE PROJECT

npm init -y

##### DEPENDENCIES

npm install express@5.2.1 cors@2.8.5 dotenv@17.2.3 drizzle-orm@0.44.7 pg@8.16.3 @clerk/express@1.0.1

##### DEV DEPENDENCIES

npm install -D typescript@5.9.3 tsx@4.23.15 drizzle-kit@0.31.7 @types/express@5.0.6 @types/cors@2.8.19 @types/pg@8.15.6

#### IMPORT CORS TO ALLOW COMMUNICATION BETWEEN BACKEND AND FRONTEND

#### CREATE A NEW PROJECT IN NEON AND GET THE 'CONNECTION STRING'

create backend/src/db/schema.ts (where you create the models)
create backend/src/db/index.ts (where you stablish connection)
create backend/drizzle.config.ts (where you configure drizzle: schema, dialect, credntials etc)
add the script command ["db:push": "drizzle-kit push"] to package.json and "npm run db:push" to create the schema into the Neon remote database

#### CREATE A NEW PROJECT IN CLERK AND GET THE 'CLERK_PUBLISHABLE_KEY' AND 'CLERK_SECRET_KEY'

npm i @clerk/express@1.7.60 -> Reinstall because the first one had an error, a bug

#### CREATE THE ROUTES AND CONTROLLERS
