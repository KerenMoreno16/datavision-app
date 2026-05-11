import pandas as pd
import json

# LOAD DATASET
df = pd.read_csv('../dataset/Global_Superstore.csv', encoding='latin1')

# CLEAN DATA
df = df.dropna()

# KPIs
total_sales = round(df['Sales'].sum(), 2)

total_profit = round(df['Profit'].sum(), 2)

total_orders = df['Order ID'].nunique()

avg_discount = round(df['Discount'].mean() * 100, 2)

# SALES BY CATEGORY
sales_by_category = (
    df.groupby('Category')['Sales']
    .sum()
    .reset_index()
)

# SALES BY REGION
sales_by_region = (
    df.groupby('Region')['Sales']
    .sum()
    .reset_index()
)

# MONTHLY SALES
df['Order Date'] = pd.to_datetime(df['Order Date'])

df['Month'] = df['Order Date'].dt.strftime('%b')

monthly_sales = (
    df.groupby('Month')['Sales']
    .sum()
    .reset_index()
)

# CONVERT DATA
analytics = {
    "kpis": {
        "total_sales": total_sales,
        "total_profit": total_profit,
        "total_orders": int(total_orders),
        "avg_discount": avg_discount,
    },

    "sales_by_category": sales_by_category.to_dict(orient='records'),

    "sales_by_region": sales_by_region.to_dict(orient='records'),

    "monthly_sales": monthly_sales.to_dict(orient='records'),
}

# EXPORT JSON
with open('analytics.json', 'w') as f:
    json.dump(analytics, f)

print('Analytics JSON created successfully!')