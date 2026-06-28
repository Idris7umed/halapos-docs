---
title: House Keepings
description: House keepings let you record return sales, return purchases, damaged or expired stock, and any stock found — keeping your inventory accurate.
---

## Listing Page

![House Keepings](/images/light/house-keepings.png 'House Keepings')
![House Keepings](/images/dark/house-keepings.png 'House Keepings')

This listing page displays all your house keepings, with actions to view, edit, and delete. You can click the reference number to view the house keeping details. As with other tables, the info and pagination links are at the bottom of the page.

---

## View

The house keeping view is compact. It displays your logo and company details at the top, then the date, ID, and reference with a QR code, followed by the from/to details (for a return sale/purchase) and order items, and finally the tax summary and comment.

---

## Add/Edit

![Add House Keepings](/images/light/add-keeping.png 'Add House Keepings')
![Add House Keepings](/images/dark/add-keeping.png 'Add House Keepings')

The add/edit house keeping page uses the same form, with the following fields:

1. **Type**:
   - Return Sale: accept a return sale from a customer
   - Return Purchase: send purchased products back to a supplier
   - Damage Stock: when you find damaged stock
   - Expired Stock: when your stock has expired
   - Found Unknown: when you find extra stock beyond the current quantity
2. **Date**: select the date
3. **Reference**: (optional) set one, or leave blank to auto-generate
4. **Customer/Supplier**: select the customer/supplier (searchable) — for return orders only
5. **Order Items**: scan a barcode or search to add products to the order. Set the quantity to `0` to remove them.
6. **Taxes**: (optional) select multiple taxes — for return orders only
7. **Tax Method**: exclusive/inclusive — for return orders only
   ```
   Exclusive: Price * tax rate / 100
   Price: 100, Net Price: 100, Tax Rate: 10 (10%), Unit Price: 110
   ```
   ```
   Inclusive: Price * tax rate / (100 + tax_rate)
   Price: 100, Net Price: 90.91, Tax Rate: 9.09 (10%), Unit Price: 100
   ```
8. **Comment/Note**: (optional) any notes

---

## Automation

The system will update the product's stock and set the customer's dues accordingly.

---

> If you have any suggestions, please [start a discussion](https://halabyte.com/contact).
