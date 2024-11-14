-- Active: 1720985866681@@127.0.0.1@5432@veterinary_marketplace

create database veterinary_marketplace;

CREATE TABLE products (
    id SERIAL PRIMARY KEY,
    type VARCHAR(50),
    category VARCHAR(50),
    sku VARCHAR(50) UNIQUE,
    brand VARCHAR(50),
    name VARCHAR(100),
    price INTEGER
);

INSERT INTO products (type, category, sku, brand, name, price) VALUES ('Perros', 'Farmacia', '00PEFA0224455', 'Heel', 'Traumel 250 Tabletas', 5200);
INSERT INTO products (type, category, sku, brand, name, price) VALUES ('Perros', 'Farmacia', '00PEFA0025485', 'Heel', 'Zeel 5 ml', 12000);
INSERT INTO products (type, category, sku, brand, name, price) VALUES ('Perros', 'Farmacia', '00PEFA0021548', 'Drag Pharma', 'Depodrag 20 ml', 7890);
INSERT INTO products (type, category, sku, brand, name, price) VALUES ('Perros', 'Insumos', '00PEIN0025587', 'Madegon', 'Guante Quirurgico 50 Unidades', 5000);
INSERT INTO products (type, category, sku, brand, name, price) VALUES ('Perros', 'Insumos', '00PEIN0025412', 'Traper', 'Desinfectante de Ambiente 500 Cc', 6490);
INSERT INTO products (type, category, sku, brand, name, price) VALUES ('Perros', 'Insumos', '00PEIN0023658', 'Povisept', 'Povidona Yodada 100 ml', 4500);
INSERT INTO products (type, category, sku, brand, name, price) VALUES ('Perros', 'Accesorios y Juguetes', '00PEAC0025478', 'Unknown', 'Correa de paseo 170 cm', 4500);
INSERT INTO products (type, category, sku, brand, name, price) VALUES ('Perros', 'Accesorios y Juguetes', '00PEAC0012345', 'Unknown', 'Trailla Retractil con seguro 5 mt', 7800);
INSERT INTO products (type, category, sku, brand, name, price) VALUES ('Perros', 'Accesorios y Juguetes', '00PEAC0014785', 'Unknown', 'Bozal N1 Nylon 1 Unidades', 9000);
INSERT INTO products (type, category, sku, brand, name, price) VALUES ('Perros', 'Alimentos y Snack', '00PEAL0012311', 'Interfarma', 'Aminobolic 60 Tabletas', 4000);
INSERT INTO products (type, category, sku, brand, name, price) VALUES ('Perros', 'Alimentos y Snack', '00PEAL0023588', 'Goufy', 'Hueso Compacto 95 Gr', 18000);
INSERT INTO products (type, category, sku, brand, name, price) VALUES ('Perros', 'Alimentos y Snack', '00PEAL0011452', 'Fit Formula', 'Alimento Perro Adulto 1000 Gr', 15200);
INSERT INTO products (type, category, sku, brand, name, price) VALUES ('Perros', 'Higiene y Belleza', '00PEHI0012541', 'Labyes', 'Otiflex Limpiador 100 ml', 22000);
INSERT INTO products (type, category, sku, brand, name, price) VALUES ('Perros', 'Higiene y Belleza', '00PEHI0025877', 'Traper', 'Neutralizador de Olores 440 cc', 11600);
INSERT INTO products (type, category, sku, brand, name, price) VALUES ('Perros', 'Higiene y Belleza', '00PEHI0023658', 'Traper', 'Pulgas y Garrapatas 500 ml', 6500);
INSERT INTO products (type, category, sku, brand, name, price) VALUES ('Gatos', 'Farmacia', '00GAFA1122361', 'Holliday', 'Apetil 10 ml', 5200);
INSERT INTO products (type, category, sku, brand, name, price) VALUES ('Gatos', 'Farmacia', '00GAFA1142352', 'ilium', 'Frusemide 50 ml', 12000);
INSERT INTO products (type, category, sku, brand, name, price) VALUES ('Gatos', 'Farmacia', '00GAFA1163543', 'Equilibrio', 'Pro Cart 60 Tabletas', 7890);
INSERT INTO products (type, category, sku, brand, name, price) VALUES ('Gatos', 'Insumos', '00GAIN1144744', 'Drag Pharma', 'Inveclor 1 lt', 5000);
INSERT INTO products (type, category, sku, brand, name, price) VALUES ('Gatos', 'Insumos', '00GAIN1178545', 'Americano', 'Algodón Prensado 1 Kg', 6490);
INSERT INTO products (type, category, sku, brand, name, price) VALUES ('Gatos', 'Insumos', '00GAIN1196546', 'Difen Pharma', 'Gel Ecografia 5 lt', 4500);
INSERT INTO products (type, category, sku, brand, name, price) VALUES ('Gatos', 'Accesorios y Juguetes', '00GAAC1416357', 'Unknown', 'Jeringa Tableta 1 Unidades', 4500);
INSERT INTO products (type, category, sku, brand, name, price) VALUES ('Gatos', 'Accesorios y Juguetes', '00GAAC1123468', 'beaphar', 'Calming Difusor 30 ml', 7800);
INSERT INTO products (type, category, sku, brand, name, price) VALUES ('Gatos', 'Accesorios y Juguetes', '00GAAC1136559', 'Traper', 'Catnip eco 15 gr', 9000);
INSERT INTO products (type, category, sku, brand, name, price) VALUES ('Gatos', 'Alimentos y Snack', '00GAAL1125470', 'Drag Pharma', 'Mamistop 100 gr', 4000);
INSERT INTO products (type, category, sku, brand, name, price) VALUES ('Gatos', 'Alimentos y Snack', '00GAAL1141851', 'Virbac', 'Nutrobound 150 ml', 18000);
INSERT INTO products (type, category, sku, brand, name, price) VALUES ('Gatos', 'Alimentos y Snack', '00GAAL1185422', 'Fellini', 'Pollo en salsa 85 gr', 15200);
INSERT INTO products (type, category, sku, brand, name, price) VALUES ('Gatos', 'Higiene y Belleza', '00GAHI1196323', 'Traper', 'Arena Premium 5 kg', 22000);
INSERT INTO products (type, category, sku, brand, name, price) VALUES ('Gatos', 'Higiene y Belleza', '00GAHI1145874', 'Traper', 'Shampoo Espuma seca 170 ml', 11600);
INSERT INTO products (type, category, sku, brand, name, price) VALUES ('Gatos', 'Higiene y Belleza', '00GAHI1125455', 'Unknown', 'Rasqueta cuadrada con tapa 1 Unidades', 6500);

ALTER TABLE products ADD COLUMN image_url VARCHAR(255);

select * from products where type='Perros';

UPDATE products SET image_url = 'uploads/images/dogs/00PEFA0224455.jpg' WHERE sku = '00PEFA0224455';
UPDATE products SET image_url = 'uploads/images/dogs/00PEFA0025485.jpg' WHERE sku = '00PEFA0025485';
UPDATE products SET image_url = 'uploads/images/dogs/00PEFA0021548.jpg' WHERE sku = '00PEFA0021548';
UPDATE products SET image_url = 'uploads/images/dogs/00PEIN0025587.jpg' WHERE sku = '00PEIN0025587';
UPDATE products SET image_url = 'uploads/images/dogs/00PEIN0025412.jpg' WHERE sku = '00PEIN0025412';
UPDATE products SET image_url = 'uploads/images/dogs/00PEIN0023658.jpg' WHERE sku = '00PEIN0023658';
UPDATE products SET image_url = 'uploads/images/dogs/00PEAC0025478.jpg' WHERE sku = '00PEAC0025478';
UPDATE products SET image_url = 'uploads/images/dogs/00PEAC0012345.jpg' WHERE sku = '00PEAC0012345';
UPDATE products SET image_url = 'uploads/images/dogs/00PEAC0014785.jpg' WHERE sku = '00PEAC0014785';
UPDATE products SET image_url = 'uploads/images/dogs/00PEAL0012311.jpg' WHERE sku = '00PEAL0012311';
UPDATE products SET image_url = 'uploads/images/dogs/00PEAL0023588.jpg' WHERE sku = '00PEAL0023588';
UPDATE products SET image_url = 'uploads/images/dogs/00PEAL0011452.jpg' WHERE sku = '00PEAL0011452';
UPDATE products SET image_url = 'uploads/images/dogs/00PEHI0012541.jpg' WHERE sku = '00PEHI0012541';
UPDATE products SET image_url = 'uploads/images/dogs/00PEHI0025877.jpg' WHERE sku = '00PEHI0025877';
UPDATE products SET image_url = 'uploads/images/dogs/00PEHI0023658.jpg' WHERE sku = '00PEHI0023658';

