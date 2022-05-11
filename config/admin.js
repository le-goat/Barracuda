module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '84c3573cbb53770e3855cdf426adec37'),
  },
});
