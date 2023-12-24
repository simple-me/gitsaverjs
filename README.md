CLI to backup your git repos and store either locally and/or in another remote supported platform, currently only S3 buckets.

# Install dependencies

```
npm install
```

# Package into a binary

```
npm run build
```

# Example:

```
./bin/index-linux backup-repo https://github.com/namruthahari/Sample-Git-Repo.git -o <out file name> -b <s3 bucket name>
```

You can omit the "-b" flag to avoid submitting the out file to a S3 bucket.