---
title: Sales & Purchases
description: A sale is the exchange of goods for money, while a purchase is buying goods from a supplier. This guide covers recording both in HalaPOS.
---

## Listing Page

![Sales](/images/light/sales.png 'Sales')
![Sales](/images/dark/sales.png 'Sales')

This listing page displays all your orders, with actions to view, edit, and delete. You can click the reference number to view the sale details. As with other tables, the info and pagination links are at the bottom of the page.

---

## View

![Order](/images/light/order.png 'Order')
![Order](/images/dark/order.png 'Order')

The sale view is compact. It displays your logo and company details at the top, then the sale date, ID, and reference with a QR code, followed by the billed-to details and order items, and finally the tax summary and sale comment.

---

## Add/Edit

The add/edit order page uses the same form, with the following fields:

1. **Date**: select the sale date
2. **Reference**: (optional) set one, or leave blank to auto-generate
3. **Customer**: select the customer (searchable)
4. **Status**: pending/complete (pending is a draft, while completed is finalized)
5. **Order Items**: scan a barcode or search to add products to the order. Set the quantity to `0` to remove them.
6. **Taxes**: (optional) select multiple taxes
7. **Tax Method**: exclusive/inclusive
   ```
   Exclusive: Price * tax rate / 100
   Price: 100, Net Price: 100, Tax Rate: 10 (10%), Unit Price: 110
   ```
   ```
   Inclusive: Price * tax rate / (100 + tax_rate)
   Price: 100, Net Price: 90.91, Tax Rate: 9.09 (10%), Unit Price: 100
   ```
8. **Discount**: (optional) fixed or percentage, e.g. 10 or 10%
   > The order discount is applied to the order total (`products' price + taxes`).
9. **Due Date**: (optional) due date for payment
10. **Comment/Note**: (optional) any notes for the sale

---

## Automation

The system will update the product's stock and set the customer's dues accordingly on completed orders.

---

> If you have any suggestions, please [start a discussion](https://halabyte.com/contact).
