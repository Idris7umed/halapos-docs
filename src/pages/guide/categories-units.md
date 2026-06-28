---
title: Categories & Units
description: Categories group together similar products, while units define how products are measured and sold. This guide covers managing both in HalaPOS.
---

## Listing Page

![Categories](/images/light/categories.png 'Categories')
![Categories](/images/dark/categories.png 'Categories')

This listing page displays all your categories/units and subcategories/subunits, with actions to edit and delete. As with other tables, the info and pagination links are at the bottom of the page.

---

## Add/Edit

![Edit Unit](/images/light/edit-unit.png 'Edit Unit')
![Edit Unit](/images/dark/edit-unit.png 'Edit Unit')

The add/edit page uses the same form, with the following fields:

1. **Name**: name of the category
2. **Code**: code of the category
3. - **Subcategories**: name and code for subcategories
   - **Subunits**: name, code, conversion operator, and conversion value for the subunit

---

## Import Categories

Prepare a CSV (comma separated values) file as follows:

```csv
name,code,subcategories
Category 01,,
Category 02,,Subcategory 01|Subcategory 02
```

You can copy the text above, paste it into Notepad or a text editor, and save it as `Categories.csv`. You can add more rows, and you can open it with Excel or any other spreadsheet software to add rows easily.

The first row must contain the following values, as it is used to determine the column names:

`name`, `code`, `subcategories`

Once you have prepared the file, select it and click **Read**. The system will read your file and show you the category details. Lastly, click **Save** to complete the import and view the result.

---

> If you have any suggestions, please [start a discussion](https://halabyte.com/contact).
