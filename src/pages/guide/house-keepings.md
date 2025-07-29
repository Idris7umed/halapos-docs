---
title: House Keepings
description: A house keeping is very useful as it can help you record return sales, return purchases, damage & expired stock or any stock found.
---

## Listing Page

![House Keepings](/images/light/house-keepings.png 'House Keepings')
![House Keepings](/images/dark/house-keepings.png 'House Keepings')

This listing page display all your orders with actions to view, edit and delete. You can click the reference number to view the house keepings details. As other tables, the info & pagination links are at the bottom of the page.

---

## View

The house keeping view is compact. It displays logo and company details at top then date, id and reference with qrcode. Followed by from/to (for return sale/purchase) details and order items. Lastly tax summary and sale comment.

---

## Add/Edit

![Add House Keepings](/images/light/add-keeping.png 'Add House Keepings')
![Add House Keepings](/images/dark/add-keeping.png 'Add House Keepings')

Add/edit order page uses the same form with following fields

1. **Type**:
   - Return Sale: accept return sale from customer
   - Return Purchase: send purchased products to supplier
   - Damage Stock: when you find the damaged stock
   - Expired Stock: when you stock is expired
   - Found Unknown: when found the extra product then current stock
2. **Date**: select the sale date
3. **Reference**: (optional) set or leave blank to auto generate
4. **Customer/Supplier**: select the customer/supplier (searchable) for return order only
5. **Order Items**: scan barcode or search to added products to the order. Set quantity to `0` to remove them from
6. **Taxes**: (optional) select multiple taxes for return order only
7. **Tax Method**: exclusive/inclusive for return order only
   ```
   Exclusive: Price * tax rate / 100
   Price: 100, Net Price: 100, Tax Rate: 10 (10%), Unit Price: 110
   ```
   ```
   Inclusive: Price * tax rate / (100 + tax_rate)
   Price: 100, Net Price: 90.91, Tax Rate: 9.09 (10%), Unit Price: 100
   ```
8. **Comment/Note**: (optional) for sale comments

---

## Automation

System will update the product's stock and set the customer dues accordingly.

---

> If you have any suggestions, please [start a discussion](https://halabyte.com/contact).
