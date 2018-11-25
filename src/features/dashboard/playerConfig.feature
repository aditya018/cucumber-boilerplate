Feature: Test player configuration update
    As a developer
    I want to be able update and save player configuration.

    #This scenario assuemes there will be player named example player.
    #This scenario is for updating using fixed size, other scenarios could be added ot test config
    Scenario: Test updating player name, width and height
        Given   I login with email "user@gmail.com" and password "*****"
        And     I open player config for "example player"
        When    I update width "1234" and height "4567"
        And     I open player config for "1234x4567 example player"
        Then    I expect width "1234" and height "4567"
