---
title: Products
description: A a product is an object, or service made available for consumer use as of the consumer demand; it is anything that can be offered to a market to satisfy the desire or need of a customer.
---

## Listing Page

![Products](/images/light/products.png 'Products')
![Products](/images/dark/products.png 'Products')

This listing page display all your products with actions to view, edit and delete. You can click the photo, name or code to view the product details. As other tables, the info & pagination links are at the bottom of the page.

---

## View

The product view modal shows all the details of product along with image, barcode & qrcode.

---

## Add/Edit

Add/edit order page uses the same form with following fields

1. **Phone**: select the product photo (png or jpg)
2. **Type**: standard, combo (combination) or service
3. **Name**: name of the product
4. **Code**: barcode of the product
5. **Symbology**: barcode symbology, CODE128, CODE39, EAN5, EAN8, EAN13 or UPC
6. **Cost**: purchase price of the product
7. **Price**: set selling price of the product
8. **Min. Price**: (optional) minimum price of the product that staff can sale
9. **Quantity**: set the product quantity
10. **Alert Quantity**: (optional) for sale comments
11. **Category**: product category
12. **Unit**: product unit
13. **Taxes**: (optional) product taxes
14. **Tax Method**: exclusive/inclusive
    ```
    Exclusive: Price * tax rate / 100
    Price: 100, Net Price: 100, Tax Rate: 10 (10%), Unit Price: 110
    ```
    ```
    Inclusive: Price * tax rate / (100 + tax_rate)
    Price: 100, Net Price: 90.91, Tax Rate: 9.09 (10%), Unit Price: 100
    ```
15. **Alternate Name**: (optional) alternate name of the product
16. **Details**: (optional) product details

---

## Import Products

![Products Import](/images/light/import.png 'Products Import')
![Products Import](/images/dark/import.png 'Products Import')

Please prepare csv (comma separated values) file as following

```csv
type,code,name,symbology,cost,price,quantity,alert_quantity,category,unit,taxes,tax_method,alt_name,details
Standard,TP01,Test Product 1,CODE128,11,18,0,,Drinks,Piece,SST,Inclusive,,
```

You can copy the above text and then paste it in notepad or texteditor and save it as `Products.csv` You can add more rows and even can open with excel or any other spreadsheet software to add rows easily.

The first row should have the following values as it is used to determine the column name.

`type`, `code`, `name`, `symbology`, `cost`, `price`, `quantity`, `alert_quantity`, `category`, `unit`, `taxes`, `tax_method`, `alt_name`, `details`

> To import with photos, please create a folder on your desktop and name it `smartpos` Now save your products' photos in this folder. The photo name should be product code (`TP01.png`, `TP02.png` etc) and only .png files are supported.

![Products Import Read](/images/light/import2.png 'Products Import Read')
![Products Import Read](/images/dark/import2.png 'Products Import Read')

Once you have prepared the file, select it and click read. System will read your file and show you the products details. Lastly click **_Save_** to complete the import and the result displayed.

---

> If you have any suggestions, please [start a discussion](https://github.com/SmartPOS-co/docs/discussions/new?category=ideas).
