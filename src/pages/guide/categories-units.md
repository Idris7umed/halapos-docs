---
title: Categories & Units
description: Categories are intended to group together products on similar subjects while a unit of measurement is a definite magnitude of a quantity, defined and adopted by convention that is used as a standard for measurement of the same kind of quantity.
---

## Listing Page

![Categories](/images/light/categories.png 'Categories')
![Categories](/images/dark/categories.png 'Categories')

This listing page display all your categories/units, subcategories/subunits with actions to edit and delete. As other tables, the info & pagination links are at the bottom of the page.

---

## Add/Edit

![Edit Unit](/images/light/edit-unit.png 'Edit Unit')
![Edit Unit](/images/dark/edit-unit.png 'Edit Unit')

Add/edit order page uses the same form with following fields

1. **Name**: name of the category
2. **Code**: barcode of the category
3. - **Subcategories**: name and code for subcategories
   - **Subunits**: name, code, conversion operator and conversion value for subunit

---

## Import Categories

Please prepare csv (comma separated values) file as following

```csv
name,code,subcategories
Category 01,,
Category 02,,Subcategory 01|Subcategory 02
```

You can copy the above text and then paste it in notepad or text editor and save it as `Categories.csv` You can add more rows and even can open with excel or any other spreadsheet software to add rows easily.

The first row should have the following values as it is used to determine the column name.

`name`, `code`, `subcategories`

Once you have prepared the file, select it and click read. System will read your file and show you the categories details. Lastly click **Save** to complete the import and the result displayed.

---

> If you have any suggestions, please [start a discussion](https://halabyte.com/contact).
