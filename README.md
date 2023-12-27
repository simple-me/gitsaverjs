CLI to backup your git repos and store either locally and/or in another remote supported platform, currently only S3 buckets.

# Tested with

```
node 18
```

# Install dependencies

```
npm install
```

# Build & package into a binary

```
npm run build
```

# Example:

```
./bin/index-linux backup-repo https://<repo domain>.git -o <out file name> -b <s3 bucket name>
```

You can omit the "-b" flag to avoid submitting the out file to a S3 bucket.