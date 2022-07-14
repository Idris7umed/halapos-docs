---
title: Sales & Purchases
description: A sale is the exchange of a commodity for money; the action of selling something, while a purchase is the action of buying something.
---

## Listing Page

![Sales](/images/light/sales.png 'Sales')
![Sales](/images/dark/sales.png 'Sales')

This listing page display all your orders with actions to view, edit and delete. You can click the reference number to view the sale details. As other tables, the info & pagination links are at the bottom of the page.

---

## View

![Order](/images/light/order.png 'Order')
![Order](/images/dark/order.png 'Order')

The sale view is compact. It displays logo and company details at top then sale date, id and reference with qrcode. Followed by billed to details and order items. Lastly tax summary and sale comment.

---

## Add/Edit

Add/edit order page uses the same form with following fields

1. **Date**: select the sale date
2. **Reference**: (optional) set or leave blank to auto generate
3. **Customer**: select the customer (searchable)
4. **Status**: pending/complete (pending is draft while completed is finalized)
5. **Order Items**: scan barcode or search to added products to the order. Set quantity to `0` to remove them from
6. **Taxes**: (optional) select multiple taxes (optional)
7. **Tax Method**: exclusive/inclusive
   ```
   Exclusive: `Price * tax rate / 100`
   Price: 100, Net Price: 100, Tax Rate: 10 (10%), Unit Price: 110
   ```
   ```
   Inclusive `Price * tax rate / (100 + tax_rate)`
   Price: 100, Net Price: 90.91, Tax Rate: 9.09 (10%), Unit Price: 100
   ```
8. **Discount**: (optional) Fixed or Percentage% i.e, 10 or 10%
   > order discount is applied to order total (`products' price+taxes`)
9. **Due Date**: (optional) due date for payment
10. **Comment/Note**: (optional) for sale comments

---

## Automation

## On complete order, system will update the product's stock and set the customer dues accordingly.

---

> If you have any suggestions, please [start a discussion](https://github.com/SmartPOS-co/docs/discussions/new?category=ideas).
