export class ApiUrlService {
  public static baseApiUrl = 'http://localhost:3000/api';

  public static productGetUrl(id: string) {
    return `${this.baseApiUrl}/products/get/${id}`;
  }

  public static productGetAllUrl() {
    return `${this.baseApiUrl}/products/get-all`;
  }

  public static productFindUrl() {
    return `${this.baseApiUrl}/products/find`;
  }

  public static productAddUrl() {
    return `${this.baseApiUrl}/products/add`;
  }

  public static productUpdateUrl() {
    return `${this.baseApiUrl}/products/update`;
  }

  public static productDeleteUrl(id: string) {
    return `${this.baseApiUrl}/products/delete/${id}`;
  }

}
