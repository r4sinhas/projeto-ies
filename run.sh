cd backend/PASSIT
docker-compose down -v
docker-compose up
cd ../../data_generation
docker-compose down -v
docker-compose up
cd ..
cd backend/PASSIT
mvn spring-boot:run
cd ../../data_generation/inserts
chmod +x inserts.sh
./inserts.sh
cd ../../frontend/PASSIT
npm start -dev
