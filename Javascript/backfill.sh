SSO_ENDPOINT=https://accounts-stage.athlinks.com/auth/realms/athlinks
SSO_CLIENT_ID=rsu-integration
SSO_CLIENT_SECRET=25c3b52d-1c5b-48e3-b03d-59b45cd4b38a

AWS_ENDPOINT=https://yfz5c9n9a3.execute-api.us-east-1.amazonaws.com/stage
RSU_SUPER_PARTNER=cttest
RSU_RACE_ID=5193
RSU_EVENT_ID=11639

TOKEN=`\
  curl -s \
      -X POST \
      -H 'Content-Type: application/x-www-form-urlencoded' \
      -d "grant_type=client_credentials" \
      -d "client_id=${SSO_CLIENT_ID}" \
      -d "client_secret=${SSO_CLIENT_SECRET}" \
      ${SSO_ENDPOINT}/protocol/openid-connect/token \
    | jq -r .access_token`

curl -s \
    -X GET \
    -H "Authorization: Bearer ${TOKEN}" \
    "${AWS_ENDPOINT}/compare/rsu/superPartner/${RSU_SUPER_PARTNER}/race/${RSU_RACE_ID}/event/${RSU_EVENT_ID}" \
  | jq .