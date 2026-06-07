# Module 5: Databases & System Fundamentals (20 Questions) 🗄️

As a Full Stack Developer, you must understand how data is stored, queried, and protected.

---

### Q81: What is the difference between SQL and NoSQL?
*   **Answer**: 
    - **SQL (Relational)**: Structured, use schemas, best for complex queries and ACID compliance (e.g., PostgreSQL, MySQL).
    - **NoSQL (Non-Relational)**: Flexible schema, document or key-value based, best for hierarchical data and horizontal scaling (e.g., MongoDB, Redis).

### Q82: When would you use MongoDB over PostgreSQL?
*   **Answer**: When the data structure is constantly changing, or when dealing with massive amounts of unstructured data (like logs or social media feeds).

### Q83: What is a "Database Schema"?
*   **Answer**: The formal definition of the structure, including tables, fields, and relationships.

### Q84: Explain "ACID" properties.
*   **Answer**: Atomicity, Consistency, Isolation, Durability. It ensures that database transactions are processed reliably.

### Q85: What is an "Index" and why do we use it?
*   **Answer**: A data structure that improves the speed of data retrieval.
*   **Pros/Cons**: Pros: Faster SELECT queries. Cons: Slower INSERT/UPDATE/DELETE because the index must be updated too.

### Q86: What is "Database Normalization"?
*   **Answer**: Organizing data to reduce redundancy and improve data integrity (dividing large tables into smaller ones).

### Q87: What is a "Foreign Key"?
*   **Answer**: A field in one table that refers to the Primary Key of another table, establishing a relationship.

### Q88: What is "Aggregation" in MongoDB?
*   **Answer**: A framework for processing data records and returning computed results (like summing values or grouping data).

### Q89: What is "Sharding"?
*   **Answer**: Splitting a large database across multiple servers (horizontal partitioning).

### Q90: SQL Join vs NoSQL Lookups?
*   **Answer**: SQL Joins are highly optimized on the server level; NoSQL Lookups/Joins (like MongoDB `$lookup`) are generally slower and should be avoided in high-performant apps in favor of embedding data.

### Q91: What is an ORM vs an ODM?
*   **Answer**: 
    - **ORM (Object-Relational Mapper)**: For SQL databases (e.g., Sequelize, Prisma).
    - **ODM (Object-Document Mapper)**: For NoSQL databases (e.g., Mongoose).

### Q92: What are "Stored Procedures"?
*   **Answer**: Pre-compiled SQL code that can be stored and reused in the database.

### Q93: Explain "Transactions".
*   **Answer**: A single unit of work (e.g., transferring money) that must either complete entirely or not at all.

### Q94: What is a "B-Tree"?
*   **Answer**: The most common data structure used for database indexing.

### Q95: What is "CAP Theorem"?
*   **Answer**: Consistency, Availability, Partition Tolerance. A distributed system can only provide two out of three.

### Q96: What is a "Deadlock"?
*   **Answer**: A situation where two or more transactions are waiting for each other to release locks, causing both to freeze.

### Q97: What is "Data Redundancy"?
*   **Answer**: Storing the same piece of data in multiple places. It is minimized in SQL and often embraced in NoSQL for performance.

### Q98: What is the benefit of "Redis"?
*   **Answer**: An in-memory key-value store. It is extremely fast and mainly used for caching or session management.

### Q99: What is "GraphQL" and how does it relate to databases?
*   **Answer**: A query language for your API. It allows the client to request exactly the data they need, often combining data from multiple database tables in one request.

### Q100: How do you choose between SQL and NoSQL for a new project?
*   **Answer**: Check the data complexity. If I need strict relationships and financial accuracy, I go with **SQL**. If I need high speed, horizontal scaling, and flexibility, I go with **NoSQL**.

---
🚀 *100 Questions Complete! You are now phone-interview ready.*
创新创新创新创新
