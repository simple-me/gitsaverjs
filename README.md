CLI to backup your git repos and store either locally and/or in another remote supported platform, currently only S3 buckets.

# Tested with

```
node 18
```

# Install dependencies

```
npm install
```

# Build

```
npm run build
```

# Example:

```
node ./build/index.js backup-repo https://<repo domain>.git -o <out file name> -b <s3 bucket name>
```

You can omit the "-b" flag to avoid submitting the out file to a S3 bucket.

# Example2:

```
node ./build/index.js backup-repo -fr text_file_containing_repos -o <out file name> -b <s3 bucket name>
```