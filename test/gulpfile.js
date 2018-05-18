'use strict';

const gulp = require('gulp');
const qn = require('../');
gulp.task('default', function () {
  return gulp.src('./js/*')
    .pipe(qn({
      qiniu: {
        accessKey: 'dpyJWLAuFSNBr2V--RseQ9loLMhGkG7FSfHgr5KH',
        secretKey: '122ILyahm3AFFpYAWwI_Q4kyM37cphSOVS33hfae',
        bucket: 'gowhich',
        origin: '7sbph3.com1.z0.glb.clouddn.com',
      },
      prefix: 'statics',
    }));
});