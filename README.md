uport stuff

https://medium.com/uport/uport-app-manager-create-an-identity-for-your-app-8e7a65a7bf4c

https://github.com/uport-project/docs/blob/develop/guides/GettingStarted.md

'''javascript
import { Connect, SimpleSigner } from 'uport-connect'

    const uport = new Connect('Simple Tokens', {
      clientId: '2opgR6GqsaayEzdKgZzaxRbCMrBzoBchxVu',
      network: 'rinkeby or ropsten or kovan',
      signer: SimpleSigner('045f2db2ef811cc6115f2e398ab505a0fa6e81a84863083b72b9c150dc5d30e8')
    })

    // Request credentials to login
    uport.requestCredentials({
      requested: ['name', 'phone', 'country'],
      notifications: true // We want this if we want to recieve credentials
    })
    .then((credentials) => {
      // Do something
    })

    // Attest specific credentials
    uport.attestCredentials({
      sub: THE_RECEIVING_UPORT_ADDRESS,
      claim: {
        CREDENTIAL_NAME: CREDENTIAL_VALUE
      },
      exp: new Date().getTime() + 30 * 24 * 60 * 60 * 1000, // 30 days from now
    })
'''

To Do:
- blog post
- video

feature to do:
- load modal after uport success
- load failure message if uport address has no userID
