  <a name="Marzban"></a>

## Marzban
Marzban

**Kind**: global class  

* [Marzban](#Marzban)
    * [new Marzban(url)](#new_Marzban_new)
    * [.admin](#Marzban+admin) : [<code>Admin</code>](#Admin)
        * [.token(username, password, parameters)](#Marzban+admin+token) ⇒ <code>Promise.&lt;\*&gt;</code>
        * [.get()](#Marzban+admin+get) ⇒ <code>Promise.&lt;\*&gt;</code>
        * [.edit(username, data)](#Marzban+admin+edit) ⇒ <code>Promise.&lt;\*&gt;</code>
        * [.delete(username)](#Marzban+admin+delete) ⇒ <code>Promise.&lt;\*&gt;</code>
        * [.getAdmins(parameters)](#Marzban+admin+getAdmins) ⇒ <code>Promise.&lt;\*&gt;</code>
    * [.core](#Marzban+core) : [<code>Core</code>](#Core)
        * [.get()](#Marzban+core+get) ⇒ <code>Promise.&lt;\*&gt;</code>
        * [.restart()](#Marzban+core+restart) ⇒ <code>Promise.&lt;\*&gt;</code>
        * [.getConfig()](#Marzban+core+getConfig) ⇒ <code>Promise.&lt;\*&gt;</code>
        * [.editConfig(data)](#Marzban+core+editConfig) ⇒ <code>Promise.&lt;\*&gt;</code>
    * [.node](#Marzban+node) : [<code>Node</code>](#Node)
        * [.getSettings()](#Marzban+node+getSettings) ⇒ <code>Promise.&lt;\*&gt;</code>
        * [.add(data)](#Marzban+node+add) ⇒ <code>Promise.&lt;\*&gt;</code>
        * [.get(node_id)](#Marzban+node+get) ⇒ <code>Promise.&lt;\*&gt;</code>
        * [.edit(node_id, data)](#Marzban+node+edit) ⇒ <code>Promise.&lt;\*&gt;</code>
        * [.delete(node_id)](#Marzban+node+delete) ⇒ <code>Promise.&lt;\*&gt;</code>
        * [.reconnect(node_id)](#Marzban+node+reconnect) ⇒ <code>Promise.&lt;\*&gt;</code>
        * [.getNodes()](#Marzban+node+getNodes) ⇒ <code>Promise.&lt;\*&gt;</code>
        * [.getUsage(parameters)](#Marzban+node+getUsage) ⇒ <code>Promise.&lt;\*&gt;</code>
    * [.sub](#Marzban+sub) : [<code>Sub</code>](#Sub)
        * [.get(token)](#Marzban+sub+get) ⇒ <code>Promise.&lt;\*&gt;</code>
        * [.getInfo(token)](#Marzban+sub+getInfo) ⇒ <code>Promise.&lt;\*&gt;</code>
        * [.getUsage(token, parameters)](#Marzban+sub+getUsage) ⇒ <code>Promise.&lt;\*&gt;</code>
        * [.getByClientType(token, client_type)](#Marzban+sub+getByClientType) ⇒ <code>Promise.&lt;\*&gt;</code>
    * [.system](#Marzban+system) : [<code>System</code>](#System)
        * [.get()](#Marzban+system+get) ⇒ <code>Promise.&lt;\*&gt;</code>
        * [.getInbounds()](#Marzban+system+getInbounds) ⇒ <code>Promise.&lt;\*&gt;</code>
        * [.getHosts()](#Marzban+system+getHosts) ⇒ <code>Promise.&lt;\*&gt;</code>
        * [.editHost(data)](#Marzban+system+editHost) ⇒ <code>Promise.&lt;\*&gt;</code>
    * [.user](#Marzban+user) : [<code>User</code>](#User)
        * [.add(data)](#Marzban+user+add) ⇒ <code>Promise.&lt;\*&gt;</code>
        * [.get(username)](#Marzban+user+get) ⇒ <code>Promise.&lt;\*&gt;</code>
        * [.edit(username, data)](#Marzban+user+edit) ⇒ <code>Promise.&lt;\*&gt;</code>
        * [.delete(username)](#Marzban+user+delete) ⇒ <code>Promise.&lt;\*&gt;</code>
        * [.resetDataUsage(username)](#Marzban+user+resetDataUsage) ⇒ <code>Promise.&lt;\*&gt;</code>
        * [.revokeSub(username)](#Marzban+user+revokeSub) ⇒ <code>Promise.&lt;\*&gt;</code>
        * [.getUsage(username, parameters)](#Marzban+user+getUsage) ⇒ <code>Promise.&lt;\*&gt;</code>
        * [.setOwner(username, admin_username)](#Marzban+user+setOwner) ⇒ <code>Promise.&lt;\*&gt;</code>
        * [.list(parameters)](#Marzban+user+list) ⇒ <code>Promise.&lt;\*&gt;</code>
        * [.resetUsersUsage()](#Marzban+user+resetUsersUsage) ⇒ <code>Promise.&lt;\*&gt;</code>
        * [.getExpired(parameters)](#Marzban+user+getExpired) ⇒ <code>Promise.&lt;\*&gt;</code>
        * [.deleteExpired(parameters)](#Marzban+user+deleteExpired) ⇒ <code>Promise.&lt;\*&gt;</code>
    * [.userTemplate](#Marzban+userTemplate) : [<code>UserTemplate</code>](#UserTemplate)
        * [.list(parameters)](#Marzban+userTemplate+list) ⇒ <code>Promise.&lt;\*&gt;</code>
        * [.get(id)](#Marzban+userTemplate+get) ⇒ <code>Promise.&lt;\*&gt;</code>
        * [.add(data)](#Marzban+userTemplate+add) ⇒ <code>Promise.&lt;\*&gt;</code>
        * [.edit(id, data)](#Marzban+userTemplate+edit) ⇒ <code>Promise.&lt;\*&gt;</code>
        * [.delete(id)](#Marzban+userTemplate+delete) ⇒ <code>Promise.&lt;\*&gt;</code>
    * [.auth(username, password)](#Marzban+auth) ⇒ <code>Promise.&lt;boolean&gt;</code>

<a name="new_Marzban_new"></a>

### new Marzban(url)

| Param | Type | Description |
| --- | --- | --- |
| url | <code>String</code> | Marzban API URL |

<a name="Marzban+admin"></a>

### marzban.admin : [<code>Admin</code>](#Admin)
Admin

**Kind**: instance class of [<code>Marzban</code>](#Marzban)  

* [.admin](#Marzban+admin) : [<code>Admin</code>](#Admin)
    * [.token(username, password, parameters)](#Marzban+admin+token) ⇒ <code>Promise.&lt;\*&gt;</code>
    * [.get()](#Marzban+admin+get) ⇒ <code>Promise.&lt;\*&gt;</code>
    * [.edit(username, data)](#Marzban+admin+edit) ⇒ <code>Promise.&lt;\*&gt;</code>
    * [.delete(username)](#Marzban+admin+delete) ⇒ <code>Promise.&lt;\*&gt;</code>
    * [.getAdmins(parameters)](#Marzban+admin+getAdmins) ⇒ <code>Promise.&lt;\*&gt;</code>

<a name="Marzban+admin+token"></a>

#### admin.token(username, password, parameters) ⇒ <code>Promise.&lt;\*&gt;</code>
**Kind**: instance method of [<code>admin</code>](#Marzban+admin)  

| Param | Type |
| --- | --- |
| username | <code>String</code> | 
| password | <code>String</code> | 
| parameters | <code>Object</code> | 

<a name="Marzban+admin+get"></a>

#### admin.get() ⇒ <code>Promise.&lt;\*&gt;</code>
Get Current Admin

**Kind**: instance method of [<code>admin</code>](#Marzban+admin)  
<a name="Marzban+admin+edit"></a>

#### admin.edit(username, data) ⇒ <code>Promise.&lt;\*&gt;</code>
Modify Admin

**Kind**: instance method of [<code>admin</code>](#Marzban+admin)  

| Param | Type |
| --- | --- |
| username | <code>String</code> | 
| data | <code>Object</code> | 

<a name="Marzban+admin+delete"></a>

#### admin.delete(username) ⇒ <code>Promise.&lt;\*&gt;</code>
Remove Admin

**Kind**: instance method of [<code>admin</code>](#Marzban+admin)  

| Param | Type |
| --- | --- |
| username | <code>String</code> | 

<a name="Marzban+admin+getAdmins"></a>

#### admin.getAdmins(parameters) ⇒ <code>Promise.&lt;\*&gt;</code>
Get Admins

**Kind**: instance method of [<code>admin</code>](#Marzban+admin)  

| Param | Type |
| --- | --- |
| parameters | <code>Object</code> | 

<a name="Marzban+core"></a>

### marzban.core : [<code>Core</code>](#Core)
Core

**Kind**: instance class of [<code>Marzban</code>](#Marzban)  

* [.core](#Marzban+core) : [<code>Core</code>](#Core)
    * [.get()](#Marzban+core+get) ⇒ <code>Promise.&lt;\*&gt;</code>
    * [.restart()](#Marzban+core+restart) ⇒ <code>Promise.&lt;\*&gt;</code>
    * [.getConfig()](#Marzban+core+getConfig) ⇒ <code>Promise.&lt;\*&gt;</code>
    * [.editConfig(data)](#Marzban+core+editConfig) ⇒ <code>Promise.&lt;\*&gt;</code>

<a name="Marzban+core+get"></a>

#### core.get() ⇒ <code>Promise.&lt;\*&gt;</code>
Get Core Stats

**Kind**: instance method of [<code>core</code>](#Marzban+core)  
<a name="Marzban+core+restart"></a>

#### core.restart() ⇒ <code>Promise.&lt;\*&gt;</code>
Restart Core

**Kind**: instance method of [<code>core</code>](#Marzban+core)  
<a name="Marzban+core+getConfig"></a>

#### core.getConfig() ⇒ <code>Promise.&lt;\*&gt;</code>
Get Core Config

**Kind**: instance method of [<code>core</code>](#Marzban+core)  
<a name="Marzban+core+editConfig"></a>

#### core.editConfig(data) ⇒ <code>Promise.&lt;\*&gt;</code>
Modify Core Config

**Kind**: instance method of [<code>core</code>](#Marzban+core)  

| Param | Type |
| --- | --- |
| data | <code>Object</code> | 

<a name="Marzban+node"></a>

### marzban.node : [<code>Node</code>](#Node)
Node

**Kind**: instance class of [<code>Marzban</code>](#Marzban)  

* [.node](#Marzban+node) : [<code>Node</code>](#Node)
    * [.getSettings()](#Marzban+node+getSettings) ⇒ <code>Promise.&lt;\*&gt;</code>
    * [.add(data)](#Marzban+node+add) ⇒ <code>Promise.&lt;\*&gt;</code>
    * [.get(node_id)](#Marzban+node+get) ⇒ <code>Promise.&lt;\*&gt;</code>
    * [.edit(node_id, data)](#Marzban+node+edit) ⇒ <code>Promise.&lt;\*&gt;</code>
    * [.delete(node_id)](#Marzban+node+delete) ⇒ <code>Promise.&lt;\*&gt;</code>
    * [.reconnect(node_id)](#Marzban+node+reconnect) ⇒ <code>Promise.&lt;\*&gt;</code>
    * [.getNodes()](#Marzban+node+getNodes) ⇒ <code>Promise.&lt;\*&gt;</code>
    * [.getUsage(parameters)](#Marzban+node+getUsage) ⇒ <code>Promise.&lt;\*&gt;</code>

<a name="Marzban+node+getSettings"></a>

#### node.getSettings() ⇒ <code>Promise.&lt;\*&gt;</code>
Get Node Settings

**Kind**: instance method of [<code>node</code>](#Marzban+node)  
<a name="Marzban+node+add"></a>

#### node.add(data) ⇒ <code>Promise.&lt;\*&gt;</code>
Add Node

**Kind**: instance method of [<code>node</code>](#Marzban+node)  

| Param | Type |
| --- | --- |
| data | <code>Object</code> | 

<a name="Marzban+node+get"></a>

#### node.get(node_id) ⇒ <code>Promise.&lt;\*&gt;</code>
Get Node

**Kind**: instance method of [<code>node</code>](#Marzban+node)  

| Param | Type |
| --- | --- |
| node_id | <code>Number</code> | 

<a name="Marzban+node+edit"></a>

#### node.edit(node_id, data) ⇒ <code>Promise.&lt;\*&gt;</code>
Modify Node

**Kind**: instance method of [<code>node</code>](#Marzban+node)  

| Param | Type |
| --- | --- |
| node_id | <code>Number</code> | 
| data | <code>Object</code> | 

<a name="Marzban+node+delete"></a>

#### node.delete(node_id) ⇒ <code>Promise.&lt;\*&gt;</code>
Remove Node

**Kind**: instance method of [<code>node</code>](#Marzban+node)  

| Param | Type |
| --- | --- |
| node_id | <code>Number</code> | 

<a name="Marzban+node+reconnect"></a>

#### node.reconnect(node_id) ⇒ <code>Promise.&lt;\*&gt;</code>
Reconnect Node

**Kind**: instance method of [<code>node</code>](#Marzban+node)  

| Param | Type |
| --- | --- |
| node_id | <code>Number</code> | 

<a name="Marzban+node+getNodes"></a>

#### node.getNodes() ⇒ <code>Promise.&lt;\*&gt;</code>
Get Nodes

**Kind**: instance method of [<code>node</code>](#Marzban+node)  
<a name="Marzban+node+getUsage"></a>

#### node.getUsage(parameters) ⇒ <code>Promise.&lt;\*&gt;</code>
Get Usage

**Kind**: instance method of [<code>node</code>](#Marzban+node)  

| Param | Type |
| --- | --- |
| parameters | <code>Object</code> | 

<a name="Marzban+sub"></a>

### marzban.sub : [<code>Sub</code>](#Sub)
Sub

**Kind**: instance class of [<code>Marzban</code>](#Marzban)  

* [.sub](#Marzban+sub) : [<code>Sub</code>](#Sub)
    * [.get(token)](#Marzban+sub+get) ⇒ <code>Promise.&lt;\*&gt;</code>
    * [.getInfo(token)](#Marzban+sub+getInfo) ⇒ <code>Promise.&lt;\*&gt;</code>
    * [.getUsage(token, parameters)](#Marzban+sub+getUsage) ⇒ <code>Promise.&lt;\*&gt;</code>
    * [.getByClientType(token, client_type)](#Marzban+sub+getByClientType) ⇒ <code>Promise.&lt;\*&gt;</code>

<a name="Marzban+sub+get"></a>

#### sub.get(token) ⇒ <code>Promise.&lt;\*&gt;</code>
User Subscription

**Kind**: instance method of [<code>sub</code>](#Marzban+sub)  

| Param | Type |
| --- | --- |
| token | <code>String</code> | 

<a name="Marzban+sub+getInfo"></a>

#### sub.getInfo(token) ⇒ <code>Promise.&lt;\*&gt;</code>
User Subscription Info

**Kind**: instance method of [<code>sub</code>](#Marzban+sub)  

| Param | Type |
| --- | --- |
| token | <code>String</code> | 

<a name="Marzban+sub+getUsage"></a>

#### sub.getUsage(token, parameters) ⇒ <code>Promise.&lt;\*&gt;</code>
User get usage

**Kind**: instance method of [<code>sub</code>](#Marzban+sub)  

| Param | Type |
| --- | --- |
| token | <code>String</code> | 
| parameters | <code>Object</code> | 

<a name="Marzban+sub+getByClientType"></a>

#### sub.getByClientType(token, client_type) ⇒ <code>Promise.&lt;\*&gt;</code>
User Subscription With Client Type

**Kind**: instance method of [<code>sub</code>](#Marzban+sub)  

| Param | Type |
| --- | --- |
| token | <code>String</code> | 
| client_type | <code>String</code> | 

<a name="Marzban+system"></a>

### marzban.system : [<code>System</code>](#System)
System

**Kind**: instance class of [<code>Marzban</code>](#Marzban)  

* [.system](#Marzban+system) : [<code>System</code>](#System)
    * [.get()](#Marzban+system+get) ⇒ <code>Promise.&lt;\*&gt;</code>
    * [.getInbounds()](#Marzban+system+getInbounds) ⇒ <code>Promise.&lt;\*&gt;</code>
    * [.getHosts()](#Marzban+system+getHosts) ⇒ <code>Promise.&lt;\*&gt;</code>
    * [.editHost(data)](#Marzban+system+editHost) ⇒ <code>Promise.&lt;\*&gt;</code>

<a name="Marzban+system+get"></a>

#### system.get() ⇒ <code>Promise.&lt;\*&gt;</code>
Get System Stats

**Kind**: instance method of [<code>system</code>](#Marzban+system)  
<a name="Marzban+system+getInbounds"></a>

#### system.getInbounds() ⇒ <code>Promise.&lt;\*&gt;</code>
Get Inbounds

**Kind**: instance method of [<code>system</code>](#Marzban+system)  
<a name="Marzban+system+getHosts"></a>

#### system.getHosts() ⇒ <code>Promise.&lt;\*&gt;</code>
Get Hosts

**Kind**: instance method of [<code>system</code>](#Marzban+system)  
<a name="Marzban+system+editHost"></a>

#### system.editHost(data) ⇒ <code>Promise.&lt;\*&gt;</code>
Modify Hosts

**Kind**: instance method of [<code>system</code>](#Marzban+system)  

| Param |
| --- |
| data | 

<a name="Marzban+user"></a>

### marzban.user : [<code>User</code>](#User)
User

**Kind**: instance class of [<code>Marzban</code>](#Marzban)  

* [.user](#Marzban+user) : [<code>User</code>](#User)
    * [.add(data)](#Marzban+user+add) ⇒ <code>Promise.&lt;\*&gt;</code>
    * [.get(username)](#Marzban+user+get) ⇒ <code>Promise.&lt;\*&gt;</code>
    * [.edit(username, data)](#Marzban+user+edit) ⇒ <code>Promise.&lt;\*&gt;</code>
    * [.delete(username)](#Marzban+user+delete) ⇒ <code>Promise.&lt;\*&gt;</code>
    * [.resetDataUsage(username)](#Marzban+user+resetDataUsage) ⇒ <code>Promise.&lt;\*&gt;</code>
    * [.revokeSub(username)](#Marzban+user+revokeSub) ⇒ <code>Promise.&lt;\*&gt;</code>
    * [.getUsage(username, parameters)](#Marzban+user+getUsage) ⇒ <code>Promise.&lt;\*&gt;</code>
    * [.setOwner(username, admin_username)](#Marzban+user+setOwner) ⇒ <code>Promise.&lt;\*&gt;</code>
    * [.list(parameters)](#Marzban+user+list) ⇒ <code>Promise.&lt;\*&gt;</code>
    * [.resetUsersUsage()](#Marzban+user+resetUsersUsage) ⇒ <code>Promise.&lt;\*&gt;</code>
    * [.getExpired(parameters)](#Marzban+user+getExpired) ⇒ <code>Promise.&lt;\*&gt;</code>
    * [.deleteExpired(parameters)](#Marzban+user+deleteExpired) ⇒ <code>Promise.&lt;\*&gt;</code>

<a name="Marzban+user+add"></a>

#### user.add(data) ⇒ <code>Promise.&lt;\*&gt;</code>
Add User

**Kind**: instance method of [<code>user</code>](#Marzban+user)  

| Param | Type |
| --- | --- |
| data | <code>Object</code> | 

<a name="Marzban+user+get"></a>

#### user.get(username) ⇒ <code>Promise.&lt;\*&gt;</code>
Get User

**Kind**: instance method of [<code>user</code>](#Marzban+user)  

| Param | Type |
| --- | --- |
| username | <code>String</code> | 

<a name="Marzban+user+edit"></a>

#### user.edit(username, data) ⇒ <code>Promise.&lt;\*&gt;</code>
Modify User

**Kind**: instance method of [<code>user</code>](#Marzban+user)  

| Param | Type |
| --- | --- |
| username | <code>String</code> | 
| data | <code>Object</code> | 

<a name="Marzban+user+delete"></a>

#### user.delete(username) ⇒ <code>Promise.&lt;\*&gt;</code>
Remove User

**Kind**: instance method of [<code>user</code>](#Marzban+user)  

| Param | Type |
| --- | --- |
| username | <code>String</code> | 

<a name="Marzban+user+resetDataUsage"></a>

#### user.resetDataUsage(username) ⇒ <code>Promise.&lt;\*&gt;</code>
Renew User Data Usage

**Kind**: instance method of [<code>user</code>](#Marzban+user)  

| Param | Type |
| --- | --- |
| username | <code>String</code> | 

<a name="Marzban+user+revokeSub"></a>

#### user.revokeSub(username) ⇒ <code>Promise.&lt;\*&gt;</code>
Revoke users subscription (Subscription link and proxies)

**Kind**: instance method of [<code>user</code>](#Marzban+user)  

| Param | Type |
| --- | --- |
| username | <code>String</code> | 

<a name="Marzban+user+getUsage"></a>

#### user.getUsage(username, parameters) ⇒ <code>Promise.&lt;\*&gt;</code>
Get User Usage

**Kind**: instance method of [<code>user</code>](#Marzban+user)  

| Param | Type |
| --- | --- |
| username | <code>String</code> | 
| parameters | <code>Object</code> | 

<a name="Marzban+user+setOwner"></a>

#### user.setOwner(username, admin_username) ⇒ <code>Promise.&lt;\*&gt;</code>
Set Owner

**Kind**: instance method of [<code>user</code>](#Marzban+user)  

| Param | Type |
| --- | --- |
| username | <code>String</code> | 
| admin_username | <code>String</code> | 

<a name="Marzban+user+list"></a>

#### user.list(parameters) ⇒ <code>Promise.&lt;\*&gt;</code>
Get all users

**Kind**: instance method of [<code>user</code>](#Marzban+user)  

| Param | Type |
| --- | --- |
| parameters | <code>Object</code> | 

<a name="Marzban+user+resetUsersUsage"></a>

#### user.resetUsersUsage() ⇒ <code>Promise.&lt;\*&gt;</code>
Reset all users data usage

**Kind**: instance method of [<code>user</code>](#Marzban+user)  
<a name="Marzban+user+getExpired"></a>

#### user.getExpired(parameters) ⇒ <code>Promise.&lt;\*&gt;</code>
Get users who has expired

**Kind**: instance method of [<code>user</code>](#Marzban+user)  

| Param | Type |
| --- | --- |
| parameters | <code>Object</code> | 

<a name="Marzban+user+deleteExpired"></a>

#### user.deleteExpired(parameters) ⇒ <code>Promise.&lt;\*&gt;</code>
Delete users who has expired

**Kind**: instance method of [<code>user</code>](#Marzban+user)  

| Param | Type |
| --- | --- |
| parameters | <code>Object</code> | 

<a name="Marzban+userTemplate"></a>

### marzban.userTemplate : [<code>UserTemplate</code>](#UserTemplate)
UserTemplate

**Kind**: instance class of [<code>Marzban</code>](#Marzban)  

* [.userTemplate](#Marzban+userTemplate) : [<code>UserTemplate</code>](#UserTemplate)
    * [.list(parameters)](#Marzban+userTemplate+list) ⇒ <code>Promise.&lt;\*&gt;</code>
    * [.get(id)](#Marzban+userTemplate+get) ⇒ <code>Promise.&lt;\*&gt;</code>
    * [.add(data)](#Marzban+userTemplate+add) ⇒ <code>Promise.&lt;\*&gt;</code>
    * [.edit(id, data)](#Marzban+userTemplate+edit) ⇒ <code>Promise.&lt;\*&gt;</code>
    * [.delete(id)](#Marzban+userTemplate+delete) ⇒ <code>Promise.&lt;\*&gt;</code>

<a name="Marzban+userTemplate+list"></a>

#### userTemplate.list(parameters) ⇒ <code>Promise.&lt;\*&gt;</code>
Get User Templates

**Kind**: instance method of [<code>userTemplate</code>](#Marzban+userTemplate)  

| Param | Type |
| --- | --- |
| parameters | <code>Object</code> | 

<a name="Marzban+userTemplate+get"></a>

#### userTemplate.get(id) ⇒ <code>Promise.&lt;\*&gt;</code>
Get User Template

**Kind**: instance method of [<code>userTemplate</code>](#Marzban+userTemplate)  

| Param | Type |
| --- | --- |
| id | <code>Number</code> | 

<a name="Marzban+userTemplate+add"></a>

#### userTemplate.add(data) ⇒ <code>Promise.&lt;\*&gt;</code>
Add User Template

**Kind**: instance method of [<code>userTemplate</code>](#Marzban+userTemplate)  

| Param | Type |
| --- | --- |
| data | <code>Object</code> | 

<a name="Marzban+userTemplate+edit"></a>

#### userTemplate.edit(id, data) ⇒ <code>Promise.&lt;\*&gt;</code>
Modify User Template

**Kind**: instance method of [<code>userTemplate</code>](#Marzban+userTemplate)  

| Param | Type |
| --- | --- |
| id | <code>Number</code> | 
| data | <code>Object</code> | 

<a name="Marzban+userTemplate+delete"></a>

#### userTemplate.delete(id) ⇒ <code>Promise.&lt;\*&gt;</code>
Remove User Template

**Kind**: instance method of [<code>userTemplate</code>](#Marzban+userTemplate)  

| Param | Type |
| --- | --- |
| id | <code>Number</code> | 

<a name="Marzban+auth"></a>

### marzban.auth(username, password) ⇒ <code>Promise.&lt;boolean&gt;</code>
Authenticate to the Marzban API

**Kind**: instance method of [<code>Marzban</code>](#Marzban)  

| Param | Type |
| --- | --- |
| username | <code>String</code> | 
| password | <code>String</code> | 

