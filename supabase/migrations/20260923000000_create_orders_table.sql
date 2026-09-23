-- Migration: Create orders table for centralized cross-device order management
-- Applied to Supabase project for Narindra Express (gurinderthakur85-lab/narindra-techno-tools)

create table if not exists public.orders (
  id text primary key,
  customer_name text not null,
  phone text not null,
  alt_phone text,
  address text not null,
  city text,
  state text,
  pincode text,
  payment_method text default 'Cash on Delivery (COD)',
  items jsonb not null default '[]'::jsonb,
  items_text text,
  subtotal numeric default 0,
  delivery_charge numeric default 50,
  total numeric not null,
  status text not null default 'PROCESSING',
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

-- Enable Row Level Security
alter table public.orders enable row level security;

-- Policy 1: Allow public customers to submit orders
drop policy if exists "Allow public anonymous insert of orders" on public.orders;
create policy "Allow public anonymous insert of orders"
on public.orders
for insert
to anon, authenticated
with check (true);

-- Policy 2: Allow reading all orders for admin dashboard
drop policy if exists "Allow reading all orders" on public.orders;
create policy "Allow reading all orders"
on public.orders
for select
to anon, authenticated
using (true);

-- Policy 3: Allow updating order status from admin dashboard
drop policy if exists "Allow updating order status" on public.orders;
create policy "Allow updating order status"
on public.orders
for update
to anon, authenticated
using (true)
with check (true);

-- Policy 4: Allow clearing orders from admin dashboard
drop policy if exists "Allow deleting orders" on public.orders;
create policy "Allow deleting orders"
on public.orders
for delete
to anon, authenticated
using (true);

-- Create index on created_at for fast descending queries
create index if not exists idx_orders_created_at on public.orders (created_at desc);
