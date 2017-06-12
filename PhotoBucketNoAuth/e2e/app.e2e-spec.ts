import { PhotoBucketNoAuthPage } from './app.po';

describe('photo-bucket-no-auth App', () => {
  let page: PhotoBucketNoAuthPage;

  beforeEach(() => {
    page = new PhotoBucketNoAuthPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
