// ��������� ��� ������� 2
const date = "202408";         // ������� 2024 � ������ YYYYMM
const time_period = "m";       // �����: m (�����)

// ��������� ��'��� URL
const baseUrl = "https://bank.gov.ua/";
const apiPath = "/api/fininc_exp";

const url = new URL(apiPath, baseUrl);

// ������ ��������� �� URL
url.searchParams.append('date', date);
url.searchParams.append('period', time_period);

// �������� URL � �������
console.log(url.toString());