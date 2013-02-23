# localStorage ORM

localStorage Object Relation Mapping

## Data
Objects should be indexed by id

    {"149":{"patient_related":false,"lock_version":0,"uuid":"918497e0-29a4-012f-1aca-005056af31ef","updated_at":"2012-01-25T11:04:29-06:00","facility_id":13,"priority_id":108,"job_type_id":269,"description":"Light burned out","created_at":"2012-01-25T11:04:29-06:00","id":149},"150":{"patient_related":true,"lock_version":0,"uuid":"9194e050-29a4-012f-1acb-005056af31ef","updated_at":"2012-01-25T11:04:29-06:00","facility_id":13,"priority_id":109,"job_type_id":272,"description":"Toilet stopped up","created_at":"2012-01-25T11:04:29-06:00","id":150},"151":{"patient_related":true,"lock_version":0,"uuid":"919607f0-29a4-012f-1acc-005056af31ef","updated_at":"2012-01-25T11:04:29-06:00","facility_id":13,"priority_id":109,"job_type_id":272,"description":"Drain clogged","created_at":"2012-01-25T11:04:29-06:00","id":151},"152":{"patient_related":true,"lock_version":0,"uuid":"91970ba0-29a4-012f-1acd-005056af31ef","updated_at":"2012-01-25T11:04:29-06:00","facility_id":13,"priority_id":108,"job_type_id":267,"description":"Room too cold","created_at":"2012-01-25T11:04:29-06:00","id":152},"153":{"patient_related":true,"lock_version":0,"uuid":"919801c0-29a4-012f-1ace-005056af31ef","updated_at":"2012-01-25T11:04:29-06:00","facility_id":13,"priority_id":108,"job_type_id":267,"description":"Room too hot","created_at":"2012-01-25T11:04:29-06:00","id":153},"154":{"patient_related":false,"lock_version":0,"uuid":"9198f860-29a4-012f-1acf-005056af31ef","updated_at":"2013-01-03T21:04:05-06:00","facility_id":13,"priority_id":109,"job_type_id":283,"description":"Door won't close","created_at":"2012-01-25T11:04:29-06:00","id":154},"155":{"patient_related":false,"lock_version":0,"uuid":"9199e740-29a4-012f-1ad0-005056af31ef","updated_at":"2012-01-25T11:04:29-06:00","facility_id":13,"priority_id":108,"job_type_id":269,"description":"Power out","created_at":"2012-01-25T11:04:29-06:00","id":155},"156":{"patient_related":true,"lock_version":0,"uuid":"919ad520-29a4-012f-1ad1-005056af31ef","updated_at":"2012-01-25T11:04:29-06:00","facility_id":13,"priority_id":108,"job_type_id":283,"description":"TV is broken","created_at":"2012-01-25T11:04:29-06:00","id":156},"157":{"patient_related":true,"lock_version":0,"uuid":"919bc420-29a4-012f-1ad2-005056af31ef","updated_at":"2012-01-25T11:04:29-06:00","facility_id":13,"priority_id":108,"job_type_id":272,"description":"No hot water","created_at":"2012-01-25T11:04:29-06:00","id":157},"158":{"patient_related":true,"lock_version":0,"uuid":"919cb3f0-29a4-012f-1ad3-005056af31ef","updated_at":"2012-01-25T11:04:29-06:00","facility_id":13,"priority_id":108,"job_type_id":283,"description":"TV remote does not work","created_at":"2012-01-25T11:04:29-06:00","id":158},"159":{"patient_related":false,"lock_version":0,"uuid":"919da3f0-29a4-012f-1ad4-005056af31ef","updated_at":"2012-01-25T11:04:29-06:00","facility_id":13,"priority_id":109,"job_type_id":272,"description":"Water leak","created_at":"2012-01-25T11:04:29-06:00","id":159},"652":{"patient_related":false,"lock_version":0,"uuid":"da2dede0-3839-0130-1c8c-065142d3bcb8","updated_at":"2013-01-03T19:13:36-06:00","facility_id":13,"priority_id":108,"job_type_id":283,"description":"Empty cardboard bailer","created_at":"2013-01-03T19:13:20-06:00","id":652},"653":{"patient_related":true,"lock_version":0,"uuid":"ffe96d10-3839-0130-1c90-065142d3bcb8","updated_at":"2013-01-03T19:14:23-06:00","facility_id":13,"priority_id":108,"job_type_id":267,"description":"Ice machine not working","created_at":"2013-01-03T19:14:23-06:00","id":653},"654":{"patient_related":false,"lock_version":0,"uuid":"2f7b3830-383a-0130-1c99-065142d3bcb8","updated_at":"2013-01-03T19:15:43-06:00","facility_id":13,"priority_id":107,"job_type_id":267,"description":"Defrost refridgerator","created_at":"2013-01-03T19:15:43-06:00","id":654},"655":{"patient_related":false,"lock_version":0,"uuid":"8fb19ba0-383a-0130-1ca0-065142d3bcb8","updated_at":"2013-01-03T19:18:25-06:00","facility_id":13,"priority_id":107,"job_type_id":283,"description":"Cabinet broken","created_at":"2013-01-03T19:18:25-06:00","id":655},"656":{"patient_related":false,"lock_version":0,"uuid":"dfd7c390-3848-0130-6525-065142f28507","updated_at":"2013-01-03T21:01:05-06:00","facility_id":13,"priority_id":107,"job_type_id":283,"description":"Remove bed","created_at":"2013-01-03T21:00:52-06:00","id":656},"657":{"patient_related":true,"lock_version":0,"uuid":"f5de0a10-3848-0130-652b-065142f28507","updated_at":"2013-01-03T21:01:36-06:00","facility_id":13,"priority_id":109,"job_type_id":283,"description":"Need bed","created_at":"2013-01-03T21:01:29-06:00","id":657},"658":{"patient_related":true,"lock_version":0,"uuid":"2923eae0-3849-0130-6531-065142f28507","updated_at":"2013-01-03T21:02:55-06:00","facility_id":13,"priority_id":109,"job_type_id":272,"description":"Toilet overflowing","created_at":"2013-01-03T21:02:55-06:00","id":658},"659":{"patient_related":false,"lock_version":0,"uuid":"e3e490e0-3851-0130-6653-065142f28507","updated_at":"2013-01-03T22:05:24-06:00","facility_id":13,"priority_id":109,"job_type_id":283,"description":"Noise","created_at":"2013-01-03T22:05:24-06:00","id":659}}

### Ruby Tip

You can index by a hash by each record's unique ID using the Rails Enumerable method <a href="http://apidock.com/rails/Enumerable/index_by" target="_blank">index_by</a>

> Convert an enumerable to a hash. 

### Example

    Workorder.all.index_by(&:id)

## Use

Initialize a new model. If no localStorage key (table) is available one is created when the below code is parsed.

    var Workorder = new Model('workorders');

### Find

The following will return the referenced Object that belongs to its associated ID

    Workorder.find(101);

### Where

The following will return all workorders _where_ the created_at date is less than the decalred _date_ variable.

    var date = new Date();
    Workorder.where({name:"MichaelMinter",age:28,created_at:date,admin:true},{created_at:'<'})

__Notes__

* __String__ utilizes Regex. Because the lookups are an object you _cannot_ use something like: `{description:"a",description:"b"}` but you _can_ do `{description:"[a-b]"}`
* __Numbers__ will only search literal integeral values. So a variable string type of, "1" is not the same as the variable number type of, 1.
* __Object__ is exclusive to dates and an option object `{due_date:">"}` is required to evaluaute references.
* __Boolean__ will only search literal boolean values. So `{notifications:true}` is _not_ the same as `{notifications:"true"}`.
* __Null__ will return any empty, or _null_, values. `null` is not the same as `""`.

## More

Extends Storage

    if (window.Storage){
      Storage.prototype.setObject = function(key, value) {
        "use strict";
        this.setItem(key, JSON.stringify(value));
      };
      
      Storage.prototype.getObject = function(key) {
        "use strict";
        var value = this.getItem(key);
        return value && JSON.parse(value);
      };
    } else {
      alert('localStorage is not supported on this browser')
    }

