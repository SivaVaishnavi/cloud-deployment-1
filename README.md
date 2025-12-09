ABSTRACT :- 
This project focuses on building a secure, reliable, and scalable Hospital Website using AWS Cloud Services. The website's static content, such as HTML, CSS and JavaScript.
To deliver the website content efficiently across the globe with security. We use AWS services for website hosting because they give reliability, scalability and flexibility 
without buying our own physical servers. 
Hospitals need secure, scalable, and cost-effective websites to serve patients 
efficiently. It can helping patients spend less time waiting and letting doctors focus 
more on care. This project solves that by using AWS Cloud Services to host and deliver a 
hospital website with improved speed, security, and availability. 

Implementation:- 

Firstly, we develop a website that can helps to patients spend less time waiting and letting doctors focus more on care and peoples know the treatment details through the website. 
The website's static content such as HTML, CSS and  JavaScript. Then focus on cloud services for website reliability, scalability and flexibility without buying our own physical servers. 
We can use some AWS services like- 
VPC: 
Virtual Private Cloud creates a own private network. Isolate your cloud resources and Control network configurations securely.  
With VPC can control: 
• Subnets → Public (accessible from the internet) or Private (internal only). 
• Internet Gateway (IGW) → Connect VPC to the internet access. 
• Route Tables → Control traffic flow. 
IAM: 
Manages user access and permissions securely. Allows creation of users, groups and roles with specific access rights. Supports multi-factor authentication (MFA) for enhanced security.  
Create an IAM User with EC2 permissions. Attach IAM Policies like AmazonEC2FullAccess. 
EC2-Instance:   
Elastic Compute Cloud provides virtual servers and scalable computing capacity. Run your applications on demand. Pay only for what you use.                                                
Launch an EC2 instance inside a public subnet of my VPC. Use a security group to allow port 22 (SSH) and 80 (HTTP). 
S3: 
Simple Storage Service offers secure data storage. Store website assets and guest data. It is highly durable and available. It can store objects directly that can upload 
website folder or files and images on s3 bucket Control the upload bucket using IAM policies.
Elastic Load Balancing: 
Distributes incoming traffic across multiple EC2 instances. Distributes incoming traffic across multiple EC2 instances or IPs. ELB must be inside a VPC. Connected to subnets and
routes traffic to EC2 in those subnets. 
Elastic Block Store: 
Block-level storage attached to EC2 instances. EBS volumes are tied to EC2 instances inside a VPC (same Availability Zone). IAM policies decide who can create/attach/delete EBS volumes. 
AmazonEC2FullAccess also includes EBS permissions. 
Relational Database Service: 
Managed database service (MySQL). It handles backups, patching, replication on website database. RDS always runs inside a VPC subnet. It can be public (internetaccessible) or 
private (internal only). IAM manages who can create/manage RDS resources.

Conclusion:-
    The successful implementation of the Touch Hospital Website using AWS cloud services demonstrates the power and flexibility of a fully serverless, cloud-native architecture in 
delivering modern healthcare services. The combination of Amazon S3, VPC, IAM, RDS and EC2 provided an end-to-end infrastructure that is:  
• Secure: Enforced with role-based access control, encryption and HTTP traffic. 
• Reliable: Ensures high uptime with global CDN distribution and monitoring.  
• Cost-Effective: Operates on a pay-as-you-go model, eliminating upfront infrastructure costs.  
This project not only modernizes the patient experience by offering seamless online access to appointments and hospital information but also reduces operational costs and IT overhead 
for healthcare providers. 
